import * as React from 'react'
import './info.css'
import {UserCard} from "./UserCard";
import {UserData} from "./UserData";
/**
 * 2021.01.15 | gomip | created
 * @constructor
 * 2021.01.15 | gomip | UserData는 추후에 api로 변경할것
 */

const {useState} = React

export const UserPage: React.FC = () => {
    // State -------------------------------------------------------------------------------------------------------------
    const size = 7
    // Function ----------------------------------------------------------------------------------------------------------

    // Dom ---------------------------------------------------------------------------------------------------------------
    return (
        <div className='user-wrapper'>
            {
                UserData.map(item =>
                    <UserCard key={item.userId} userName={item.userName} userId={item.userId}/>
                )
            }
            {/*<UserCard />*/}
        </div>
    )
}
