import * as React from 'react'
import './calendar.css'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import moment from 'moment'
import {useLocation} from 'react-router-dom'
import {InfoCardData} from '../Main/MainPage'

/**
 *  2021.01.14 | gomip | created
 *  2021.02.09 | gomip | api를 통해 해당 유저의 전체 기록들 조
 */

const {useEffect, useState} = React

export interface CalendarProps {
  recHistory: InfoCardData[]
}

export const Calendar: React.FC<CalendarProps> = (props) => {
  // State -------------------------------------------------------------------------------------------------------------
  const [calendar, setCalendar] = useState<any[]>([])                                                         // matrix of calendar
  const [curDay, setCurDay] = useState(moment())                                                                        // currently selected day [default : today]
  const [today, setToday] = useState(moment())                                                                          // today
  const startWeek = curDay.clone().startOf('month').startOf('week')
  const endWeek = curDay.clone().endOf('month').endOf('week')

  const {recHistory} = props
  // const startWeek = curDay.clone().startOf('month').week()
  // const endWeek = curDay.clone().endOf('month').week() === 1 ? 53 : curDay.clone().endOf('month').week()

  const location = useLocation()

  let monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  let dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  // LifeCycle ---------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const day = startWeek.clone().subtract(1, 'd')
    const tmpCal: any[] = []
    while (day.isBefore(endWeek, 'd')) {
      tmpCal.push(
        Array(7).fill(0).map(() => day.add(1, 'd').clone()),
      )
    }
    setCalendar(tmpCal)
  }, [curDay])

  // Function ----------------------------------------------------------------------------------------------------------
  const handleLeft = () => {                                                                                            // 이전 월
    const res = curDay.clone().subtract(1, 'month')
    setCurDay(res)
  }

  const handleRight = () => {                                                                                           // 다음 월
    const res = curDay.clone().add(1, 'month')
    setCurDay(res)
  }

  function curMonth() {
    return curDay.format('MMM')
  }

  function curYear() {
    return curDay.format('YYYY')
  }

  function isSelected(day: any) {
    return curDay.isSame(day, 'day')
  }

  function beforeToday(day: any) {                                                                                      // 이전 날짜들
    return day.isBefore(new Date(), 'day')
  }

  function isToday(day: any) {                                                                                          // 오늘 날짜
    return day.isSame(new Date(), 'day')
  }

  function dayStyles(day: any) {
    if (beforeToday(day)) return 'before'
    if (isSelected(day)) return 'selected'
    if (isToday(day)) return 'today'
    return ''
  }

  // Dom ---------------------------------------------------------------------------------------------------------------
  return (
    <div className='calendar-wrapper'>
      {/* 년 월 시작 */}
      <div className='date-wrapper'>
        <div><LeftOutlined onClick={handleLeft}/></div>
        <span>{curYear()}. {curMonth()}</span>
        <div><RightOutlined onClick={handleRight}/></div>
      </div>
      {/* 년 월 끝 */}

      {/* 달력 요일 시작 */}
      <div className='week-wrapper'>
        {
          dayName.map(item =>
            <div key={item} className='box-week'>
              {/*<span className={ item === 'SUN' ? 'font-week font-red' : item === 'SAT' ? 'font-week font-blue' : 'font-week'}>{item}</span>*/}
              <span className='font-week'>{item}</span>
            </div>
          )
        }
      </div>
      {/* 달력 요일 끝 */}

      {/* 달력 일자 시작 */}
      <div className='day-wrapper'>
        {calendar ?
          calendar.map((week, idx) => (
              <div key={idx} className='row'>
                {
                  week.map((day: any, index: number) => (
                      // 날짜 입력시 표시
                      <div key={index}
                           className={idx === 0 ? (index === 6 ? 'box-day box-top box-right' : 'box-top box-day') : (index === 6 ? 'box-day box-right' : 'box-day')}
                           onClick={() => setCurDay(day)}
                      >
                        <div className="font-day">{day.format('D').toString()}</div>
                      </div>
                    )
                  )
                }
              </div>
            )
          )
          : null
        }
      </div>
      {/* 달력 일자 끝 */}
    </div>
  )
}
