import * as React from 'react'
import {Card} from 'antd'
import './info.css'
import {InfoCardData} from '../Main/MainPage'

/**
 * 2021.01.26 | gomip | created
 * 2021.02.09 | gomip | db에서 데이터를 조회해서 카드에 보여주는것 적용
 * @constructor
 */

export interface InfoCardProps {
  info: InfoCardData
}

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  // State -------------------------------------------------------------------------------------------------------------
  const {info} = props
  // Function ----------------------------------------------------------------------------------------------------------

  // Dom ---------------------------------------------------------------------------------------------------------------
  return (
    <Card
      style={{marginTop: '10px'}}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
    >
      <div className='card-wrapper'>
        <pre>Date : {info.date}</pre>
        <pre>Kcal : {info.kcal} kcal</pre>
        <pre>Time : {info.time} min</pre>
      </div>
    </Card>
  )
}
