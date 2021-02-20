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

const {useState, useEffect} = React

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  // State -------------------------------------------------------------------------------------------------------------
  const {info} = props
  const [hour, setHour] = useState('0')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  // Function ----------------------------------------------------------------------------------------------------------
  useEffect(() => {
    let tmp = info.time
    if (tmp > 60) {
      let time = tmp.toString().split(".")

      let a = parseInt(tmp.toString().split(".")[0]) / 60
      setHour(a.toString().split(".")[0])

      let b = (parseInt(time[0]) % 60).toString()
      setMin(b)

      let c = time[1]
      setSec(c)

    } else {
      let a = tmp.toString().split(".")[0]
      setMin(a)
      let b = tmp.toString().split(".")[1]
      setSec(b)
    }

  }, [info])
  // Dom ---------------------------------------------------------------------------------------------------------------
  return (
    <Card
      style={{marginTop: '10px'}}
      cover={<img alt="example" src={info.path ? info.path : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}/>}
    >
      <div className='card-wrapper'>
        <pre>Date : {info.date}</pre>
        <pre>Kcal : {info.kcal} kcal</pre>
        <pre>Time : {info.time > 60 && hour + ' hr '}{min} min {sec ? sec : 0} sec</pre>
      </div>
    </Card>
  )
}
