import { Card , Avatar} from 'antd'
import * as React from 'react'
import './info.css'
import {UserOutlined} from "@ant-design/icons";

/**
 * 2021.01.15 | gomip | created
 * @constructor
 */

export interface UserCardProps {
    userName: string                                                                                                    // UserData에 저장되어있는 userName을 가져온다
    userId: string
}

export const UserCard: React.FC<UserCardProps> = (props) => {
    // State -----------------------------------------------------------------------------------------------------------
    const {userName, userId} = props

    // Function --------------------------------------------------------------------------------------------------------

    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className={userId !== '1' ? 'user-card mt-27' : 'user-card'}>
            <Avatar size={56} className='avt' icon={<UserOutlined />}/>
            <div className='user-ctn-wrapper'>
                <p>{userName}</p>
            </div>
        </div>
    )
}
