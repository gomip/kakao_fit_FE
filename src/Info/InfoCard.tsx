import * as React from 'react'
import {Card} from 'antd'
import './info.css'

/**
 * 2021.01.26 | gomip | created
 * @constructor
 */

export const InfoCard: React.FC = () => {
  // State -------------------------------------------------------------------------------------------------------------

  // Function ----------------------------------------------------------------------------------------------------------

  // Dom ---------------------------------------------------------------------------------------------------------------
  return (
      <Card
          style={{marginTop: '10px'}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
          <div className='card-wrapper'>
              <pre>Date : </pre>
              <pre>Kcal : </pre>
          </div>
      </Card>
  )
}
