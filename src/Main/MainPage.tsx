import * as React from 'react'
import {MainHeader} from './MainHeader'
import './main.css'
import 'antd/dist/antd.css'
import {Col, Row} from 'antd'
import {InfoPage} from '../Info/InfoPage'
import {Calendar} from '../Calendar/Calendar'
import axios from 'axios'
import {API_HOST} from '../utils/const'
import moment from 'moment'
import {useLocation} from 'react-router-dom'

/**
 *  2021.01.13 | gomip | created
 *  2021.01.15 | gomip | Row, Col을 사용해서 화면 기본 배치도 작성
 *  2021.02.09 | gomip | 사용자 조회, 기록들 조회 api 연동
 *  2021.02.15 | gomip | 선택 날짜 state 생성 , props로 전달하도록 변경
 */

export interface SelectOption {
  value: string
  label: string
}

export interface InfoCardData {
  date: string
  kcal: number
  time: number
}

const {useState, useEffect} = React

export const MainPage: React.FC = () => {
  // State -------------------------------------------------------------------------------------------------------------
  const [userOpt, setUserOpt] = useState<SelectOption[]>([])                                                  // 사용자 Select Option
  const [selectedUser, setSelectedUser] = useState<string>('')                                                // 현재 선택된 사용자
  const [info, setInfo] = useState<InfoCardData[]>([])                                                        // 개인 기록들 저장하는 state
  const [recHistory, setRecHistory] = useState<InfoCardData[]>([])                                            // 개인의 전체 기록들 저장
  const location = useLocation()
  const [selectedDay, setSelectedDay] = useState(moment())
  // LifeCycle ---------------------------------------------------------------------------------------------------------
  useEffect(() => {
    getUser()
  }, [location])

  useEffect(() => {
    if (selectedUser !== null && selectedUser !== undefined && selectedUser !== '') {
      getRecordByWeek(selectedUser)
      getRecordAll(selectedUser)
    }
  }, [selectedUser, selectedDay])
  // Function ----------------------------------------------------------------------------------------------------------
  const handleSelectChange = (val?: any) => {                                                                           // Select에서 선택한 사용자 id를 저장
    if (val !== null && val !== undefined) {
      setSelectedUser(val.value)
    }
  }

  const handleSelectedDate = (val?: any) => {
    if (val !== null && val !== undefined) {
      setSelectedDay(val)
    }
  }
  // API ---------------------------------------------------------------------------------------------------------------
  const getUser = () => {                                                                                               // 사용자 조회 api
    axios.get(API_HOST + '/users')
      .then(res => {
        let tmp: SelectOption[] = []
        res.data.map((item: any) =>
          tmp.push({
            value: item.id,
            label: item.name,
          }),
        )
        setUserOpt(tmp)
      }).catch(function (err) {
      console.log('err', err)
    })
  }

  const getRecordByWeek = (id: string) => {                                                                             // 오늘 날짜 기준으로 우측 카드에 필요한 데이터들 조회
    const today = moment()
    axios.get(API_HOST + '/records/week/' + id + '/' + selectedDay.format('YYYY-MM-DD'))
      .then(res => {
        let tmp: InfoCardData[] = []
        res.data.map((item: any) =>
          tmp.push({
            date: moment(item.record_date).format('YYYY-MM-DD'),
            kcal: item.kcal,
            time: item.time,
          }),
        )
        setInfo(tmp)
      }).catch(err => {
      console.log('err', err)
    })
  }

  const getRecordAll = (id: string) => {
    axios.get(API_HOST + '/records/' + id)
      .then(res => {
        let tmp: InfoCardData[] = []
        res.data.map((item: any) =>
          tmp.push({
            date: moment(item.record_date).format('YYYY-MM-DD'),
            kcal: item.kcal,
            time: item.time,
          }),
        )
        setRecHistory(tmp)
      }).catch(err => {
      console.log('err', err)
    })
  }
  // Dom -------------------------------------------------------------------------------------------------------------
  return (
    <div className='main-wrapper'>
      {/* 헤더 시작 */}
      <Row>
        <Col flex='20px'/>
        <MainHeader/>
        <Col flex='20px'/>
      </Row>
      {/* 헤더 끝 */}

      {/* 바디 시작 */}
      <Row>
        {/* 좌측 20px 빈공간 시작 */}
        <Col flex='20px'/>
        {/* 좌측 20px 빈공간 끝 */}

        {/* 달력 시작 */}
        <Col flex='1040px'>
          <Calendar
            selectedDay={selectedDay}
            recHistory={recHistory}
            handleSelectedDate={handleSelectedDate}
          />
        </Col>
        {/* 달력 끝 */}

        {/* 사이 40px 시작 */}
        <Col flex='40px'/>
        {/* 사이 40px 끝 */}

        {/* 사용자 시작 */}
        <Col flex='320px'>
          <InfoPage
            userOpt={userOpt}
            info={info}
            handleChange={handleSelectChange}
          />
        </Col>
        {/* 사용자 끝 */}

        {/* 우측 20px 빈공간 시작 */}
        <Col flex='20px'/>
        {/* 우측 20px 빈공간 끝 */}
      </Row>
      {/* 바디 끝 */}
    </div>
  )
}
