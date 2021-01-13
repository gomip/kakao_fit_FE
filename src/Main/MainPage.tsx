import * as React from 'react'
import {MainHeader} from "./MainHeader"
import './main.css'
import 'antd/dist/antd.css'
import {Row, Col} from 'antd'
import {InfoPage} from "../Info/InfoPage";
import {Calendar} from "../Calendar/Calendar";

/**
 *  2021.01.13 | gomip | created
 */

export const MainPage: React.FC = () => {
    // State -----------------------------------------------------------------------------------------------------------
    // Function --------------------------------------------------------------------------------------------------------
    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className='main-wrapper'>
        {/* 헤더 시작 */}
        <MainHeader />
        {/* 헤더 끝 */}
        
        {/* 바디 시작 */}
        <Row justify='space-between'>
            <Col flex={7}>
                <Calendar />
            </Col>
            <Col flex={2}>
                <InfoPage />
            </Col>
        </Row>
        {/* 바디 끝 */}
        </div>
    )
}