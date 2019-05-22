/**
 *@author zhangyuhua
 *@DATE 2019-04-18 17:15
 */

import React from "react";
import {Consumer} from "./Context"
export default  class Route extends React.Component {
  render(){
    return (
      <Consumer>
        {
          state => {
            console.log(state)
            return null;
          }
        }
      </Consumer>
    )
  }
}