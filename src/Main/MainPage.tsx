import * as React from 'react'
import {MainHeader} from "./MainHeader"
import './main.css'
import 'antd/dist/antd.css'
import {Row, Col} from 'antd'
import {InfoPage} from "../Info/InfoPage";
import {Calendar} from "../Calendar/Calendar";

/**
 *  2021.01.13 | gomip | created
 *  2021.01.15 | gomip | Row, Col을 사용해서 화면 기본 배치도 작성
 */

export const MainPage: React.FC = () => {
    // State -----------------------------------------------------------------------------------------------------------
    // Function --------------------------------------------------------------------------------------------------------
    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className='main-wrapper'>
        {/* 헤더 시작 */}
        <Row>
            <Col flex='20px' />
            {/*<MainHeader />*/}
            <Col flex='20px' />
        </Row>
        {/* 헤더 끝 */}
        
        {/* 바디 시작 */}
        <Row>
            {/* 좌측 20px 빈공간 시작 */}
            <Col flex='20px' />
            {/* 좌측 20px 빈공간 끝 */}

            {/* 달력 시작 */}
            <Col flex='1040px'>
                <Calendar />
            </Col>
            {/* 달력 끝 */}

            {/* 사이 40px 시작 */}
            <Col flex='40px'/>
            {/* 사이 40px 끝 */}

            {/* 사용자 시작 */}
            <Col flex='320px'>
                {/*<InfoPage />*/}
            </Col>
            {/* 사용자 끝 */}

            {/* 우측 20px 빈공간 시작 */}
            <Col flex='20px' />
            {/* 우측 20px 빈공간 끝 */}
        </Row>
        {/* 바디 끝 */}
        </div>
    )
}
