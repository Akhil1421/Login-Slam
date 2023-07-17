import React from 'react'
import {Spin} from "antd"
const Loading = ({display}) => {
  return (
    <div className='absolute' style={{display:`${display ? 'flex' : 'none'}`}}>
        <Spin size='large'/>
    </div>
  )
}

export default Loading
