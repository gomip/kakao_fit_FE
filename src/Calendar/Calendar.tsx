import * as React from 'react'
import './calendar.css'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import moment from 'moment'
import {useLocation} from 'react-router-dom'

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
        const res = today.clone().subtract(1,"month")
        setToday(res)
    }

    const handleRight = () => {                                                                                         // 다음 월
        const res = today.clone().add(1,"month")
        setToday(res)
    }

    function curMonth() {
        return today.format("MMM")
    }
    function curYear() {
        return today.format("YYYY")
    }

    function isSelected(day: any) {
        return today.isSame(day, "day")
    }

    function beforeToday(day: any) {                                                                                    // 이전 날짜들
        return day.isBefore(new Date(), "day")
    }

    function isToday(day: any) {                                                                                        // 오늘 날짜
        return day.isSame(new Date(), "day")
    }

    function dayStyles(day: any) {
        if (beforeToday(day)) return "before"
        if (isSelected(day)) return "selected"
        if (isToday(day)) return "today"
        return ""
    }
    // Dom -------------------------------------------------------------------------------------------------------------
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
