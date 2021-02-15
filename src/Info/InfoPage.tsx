import * as React from 'react'
import './info.css'
import Select from 'react-select'
import {InfoCard} from './InfoCard'
import {InfoCardData, SelectOption} from '../Main/MainPage'

/**
 *  2021.01.14 | gomip | created
 *  2021.01.25 | gomip | 사용자 정보카드 작성
 *  2021.02.09 | gomip | 사용자 조회 api 적용
 */

export interface InfoPageProps {
  userOpt: SelectOption[]
  info: InfoCardData[]
  handleChange: (val?: any) => void
}

export const InfoPage: React.FC<InfoPageProps> = (props) => {
  // State -------------------------------------------------------------------------------------------------------------
  const {userOpt, info, handleChange} = props
  // LifeCycle ---------------------------------------------------------------------------------------------------------

  // Function ----------------------------------------------------------------------------------------------------------

  // API ---------------------------------------------------------------------------------------------------------------
    console.log('info', info)
  // Dom ---------------------------------------------------------------------------------------------------------------
  return (
    <div className='info-wrapper'>
      {/* 사용자 선택 시작*/}
      <div className="user-list">
        <div className="user-text">사용자</div>
        <Select
          className="user-list-select"
          options={userOpt}
          onChange={handleChange}
        />
      </div>
      {/* 사용자 선택 끝*/}

      {/* 정보 카드 시작 */}
      <div className="data-list">
        {
          info ?
            info.map((it, idx) =>
              <InfoCard key={idx} info={it} />
            )
            : <div>운동하세요</div>
        }
      </div>
      {/* 정보 카드 끝 */}
    </div>
  )
}
