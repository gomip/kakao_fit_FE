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
    const today = new Date()
    const [year, setYear] = useState<number>(today.getFullYear())                                                       // 현재 년도
    const [month, setMonth] = useState<number>(today.getMonth()+1)                                             // 현재 월
    const [day, setDay] = useState<number>(today.getDate())                                                             // 현재 일

    let monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    // Function --------------------------------------------------------------------------------------------------------
    const handleLeft = () => {
        setMonth(month - 1)
        console.log('year',year, 'month', month)
    }

    const handleRight = () => {
        setMonth(month + 1)
        let a = moment('2021-01-17').add("1", "y").format("YYYY-MM-DD")
        console.log('year',year, 'month', month)
        console.log('a',a)
    }

    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className='calendar-wrapper'>
            {/* 년 월 시작 */}
            <div className='date-wrapper'>
                <LeftOutlined onClick={handleLeft}/>
                <span>{year}. {monthName[month]}</span>
                <RightOutlined onClick={handleRight}/>
            </div>
            {/* 년 월 끝 */}
        </div>

    )
}
