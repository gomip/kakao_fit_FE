import * as React from 'react'
import './calendar.css'
import {LeftOutlined, RightOutlined} from "@ant-design/icons"
import moment from 'moment'
import {useHistory, useLocation} from 'react-router-dom'

/**
 *  2021.01.14 | gomip | created
 */

const {useEffect, useState} = React

export const Calendar: React.FC = () => {
    // State -----------------------------------------------------------------------------------------------------------
    const [calendar, setCalendar] = useState<any[]>([])                                                              // matrix of calendar
    const [today, setToday] = useState(moment())                                                                        // currently selected day
    const startWeek = today.clone().startOf('month').startOf('week')
    const endWeek = today.clone().endOf('month').endOf('week')
    // const startWeek = today.clone().startOf('month').week()
    // const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week()

    const location = useLocation()

    let monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    let dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    // LifeCycle -------------------------------------------------------------------------------------------------------
    useEffect(() => {
        const day = startWeek.clone().subtract(1, 'd')
        const tmpCal: any[] = []
        while(day.isBefore(endWeek, 'd')) {
            tmpCal.push(
              Array(7).fill(0).map(() => day.add(1,'d').clone())
            )
        }
        setCalendar(tmpCal)
    }, [today])

    // Function --------------------------------------------------------------------------------------------------------
    const handleLeft = () => {                                                                                          // 이전 월
        today.subtract(1, 'month')
        console.log('a',today)
    }

    const handleRight = () => {                                                                                         // 다음 월
        today.add(1, 'month')
    }


    // function generateDay() {                                                                                         // 요일 박스 구현
    //     for (let week = startWeek ; week <= endWeek ; week++) {
    //         calendar.push(
    //             <div className='row' key={week}>
    //                 {
    //                     Array(7).fill(0).map((n,i) => {
    //                         let current = today.clone().week(week).startOf('week').add(n + i, 'd')
    //                         let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : ''  // 오늘 날짜 표시
    //                         let isGreyed = current.format('MM') === today.format('MM') ? '' : 'greyed'    // 현재 월이 아닐경우 일자를 회색으로 칠해준다.
    //
    //                         return (
    //                             <div className={`box-day ${isGreyed} ${isSelected}` } key={i}>
    //                                 <span className={ i === 0 ? 'font-day font-red' :( i === 6 ? 'font-day font-blue' : 'font-day')}>{current.format('D')}</span>
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         )
    //     }
    //     console.log('calendar', calendar)
    //     return calendar
    // }

    console.log('calendar', calendar)
    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className='calendar-wrapper'>
            {/* 년 월 시작 */}
            <div className='date-wrapper'>
                <LeftOutlined onClick={handleLeft}/>
                <span>{today.year()}. {monthName[today.month()]}</span>
                <RightOutlined onClick={handleRight}/>
            </div>
            {/* 년 월 끝 */}

            {/* 달력 요일 시작 */}
            <div className='week-wrapper'>
                {
                    dayName.map(item =>
                        <div key={item} className='box-week'>
                            <span className={ item === 'SUN' ? 'font-week font-red' : item === 'SAT' ? 'font-week font-blue' : 'font-week'}>{item}</span>
                        </div>
                    )
                }
            </div>
            {/* 달력 요일 끝 */}

            {/* 요일 일자 구분선 시작 */}
            <hr className='hr-line'/>
            {/* 요일 일자 구분선 끝 */}

            {/* 달력 일자 시작 */}
            <div className='day-wrapper'>
                {calendar ?
                  calendar.map((week, idx) => (
                    <div key={idx} className='row'>
                        {
                            week.map((day: any, index: number) => (
                              // 날짜 입력시 표시
                              <div key={index}
                                   className={index === 0 ? 'box-day font-red' : index === 6 ? 'box-day font-blue' : 'box-day'}
                                   onClick={() => setToday(day)}
                              >
                                  <div>{day.format('D').toString()}</div>
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
