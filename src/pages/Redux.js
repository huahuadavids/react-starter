import React                  from "react"
import {connect}              from "react-redux"
import {add, minus }          from "../redux/action/counter"
/**
 * @title decorator
 *
 * npm i babel-plugin-transform-decorators-legacy
 * write in the package.json file
 * {
 *   "plugins":[
 *     "transform-decorators-legacy"
 *   ]
 * }
 *
 */
export default @connect(
  state => state , // you also can write like this : state = > ( { value: state } )
  {add, minus}
)
class Redux extends React.Component {
  render(){
    const { counter, add, minus} = this.props;
    return (
      <div>
        <p>{counter}</p>
        <button onClick={minus}>-</button>
        <button onClick={add}>+</button>
      </div>
    )
  }
}


