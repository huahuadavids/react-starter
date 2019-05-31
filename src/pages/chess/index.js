/**
 *@author zhangyuhua
 *@DATE 2019-05-22 10:13
 */
import React from "react"
import {observer} from "mobx-react"
import "./dnd.css"
import Board from "./board"
import knightPosition from "./game"

console.log(knightPosition)

@observer
export default class Index extends React.Component {

  componentWillReact() {
    console.log(knightPosition)
  }


  render(){
    return (
      <div id='chess'>
        <Board knightPosition={knightPosition}/>
      </div>
    )
  }
}
