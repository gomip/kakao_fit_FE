import * as React from 'react'
import './info.css'
import Select from 'react-select'
import {useLocation} from 'react-router-dom'
import {UserData} from './UserData'

/**
 *  2021.01.14 | gomip | created
 *  2021.01.25 | gomip | 사용자 정보카드 작성
 */

const {useState, useEffect} = React

export interface SelectOption {
  value: string
  label: string
}

export const InfoPage: React.FC = () => {
    // State -----------------------------------------------------------------------------------------------------------
    const [userOpt, setUserOpt] = useState<SelectOption[]>([])
    const location = useLocation()
    // LifeCycle -------------------------------------------------------------------------------------------------------
    useEffect(() => {
      let tmp: SelectOption[] = []
      UserData.map(item =>
        tmp.push({
          value: item.userId,
          label: item.userName,
        })
      )
      setUserOpt(tmp)
    }, [location])
    // Function --------------------------------------------------------------------------------------------------------
  console.log('userOpt', userOpt)
    // Dom -------------------------------------------------------------------------------------------------------------
    return (
        <div className='info-wrapper'>
          {/* 사용자 선택 시작*/}
          <div className="user-list">
              <div className="user-text">사용자</div>
              <Select
                  className="user-list-select"
                  options={userOpt}
              />
          </div>
          {/* 사용자 선택 끝*/}

          {/* 정보 카드 시작 */}
          <div>

          </div>
          {/* 정보 카드 끝 */}
       </div>
    )
}
