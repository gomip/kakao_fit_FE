import * as React from 'react'
import './calendar.css'
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import moment from 'moment';

/**
 *  2021.01.14 | gomip | created
 */

const {useEffect, useState} = React

export const Calendar: React.FC = () => {
    // State -----------------------------------------------------------------------------------------------------------
    // const today = new Date()
    // const [year, setYear] = useState<number>(today.getFullYear())                                                       // 현재 년도
    // const [month, setMonth] = useState<number>(today.getMonth()+1)                                             // 현재 월
    // const [day, setDay] = useState<number>(today.getDate())                                                             // 현재 일

    let monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    let dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    // LifeCycle -------------------------------------------------------------------------------------------------------

    // Function --------------------------------------------------------------------------------------------------------
    const handleLeft = () => {                                                                                          // 이전 월
        // setMonth(month - 1)
        // console.log('year',year, 'month', month)
    }

    const handleRight = () => {                                                                                         // 다음 월
        // setMonth(month + 1)
        // let a = moment('2021-01-17').add("1", "y").format("YYYY-MM-DD")
        // console.log('year',year, 'month', month)
        // console.log('a',a)
    }

    function generateDay() {                                                                                         // 요일 박스 구현
        const today = moment()
        const startWeek = today.clone().startOf('month').week()
        const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week()
        let calendar = []

        for (let week = startWeek ; week <= endWeek ; week++) {
            calendar.push(
                <div className='row' key={week}>
                    {
                        Array(7).fill(0).map((n,i) => {
                            let current = today.clone().week(week).startOf('week').add(n + i, 'd')
                            let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : ''
                            let isGreyed = current.format('MM') === today.format('MM') ? '' : 'greyed'

                            return (
                                <div className={`box-day ${isGreyed} ${isSelected}` } key={i}>
                                    <span className='font-day'>{current.format('D')}</span>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }

        return calendar
    }

    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className='calendar-wrapper'>
            {/* 년 월 시작 */}
            <div className='date-wrapper'>
                <LeftOutlined onClick={handleLeft}/>
                {/*<span>{year}. {monthName[month]}</span>*/}
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
                {generateDay()}
            </div>
            {/* 달력 일자 끝 */}
        </div>
    )
}
