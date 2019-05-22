/**
 *@author zhangyuhua
 *@DATE 2019-05-22 10:13
 */

import React from "react"
import "./dnd.css"
import Board from "./board"

export default class Index extends React.Component {
  render(){
    return (
      <div id='chess'>
        <Board knightPosition={[0,0]}/>
      </div>
    )
  }
}