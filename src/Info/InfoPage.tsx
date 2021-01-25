import * as React from 'react'
import {UserPage} from './UserPage'
import './info.css'
import {LogPage} from "./LogPage";
import Select from 'react-select'
import {UserData} from "./UserData";
/**
 *  2021.01.14 | gomip | created
 */

const {useState, useEffect} = React



export const InfoPage: React.FC = () => {
    // State -----------------------------------------------------------------------------------------------------------
    const [userOpt, setUserOpt] = useState([])
    // LifeCycle -------------------------------------------------------------------------------------------------------
    useEffect(() => {

    }, [])
    // Function --------------------------------------------------------------------------------------------------------
    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className='info-wrapper'>
            {/* 사용자 선택 시작*/}
            <div className="user-list">
                <div className="user-text">사용자</div>
                <Select
                    className="user-list-select"
                />
            </div>
            {/* 사용자 선택 끝*/}

            {/* 카드 정보 시작 */}
            {/* 카드 정보 끝 */}
            {/* 사용자 정보 시작 */}
            {/*<UserPage />*/}
            {/* 사용자 정보 끝 */}

            {/*/!* 로그 시작 *!/*/}
            {/*<LogPage />*/}
            {/*/!* 로그 끝 *!/*/}
       </div>
    )
}
