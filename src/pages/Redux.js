import React                  from "react"
import {connect}              from "react-redux"
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
  (dispatch) => {
    return {
      reduceHandler: () => {
        dispatch({type: 'DECREMENT'});
      },
      addHandler: () => {
        dispatch({type: 'INCREMENT'});
      }
    }
  }
)
class Redux extends React.Component {
  render(){
    const { counter, reduceHandler, addHandler} = this.props;
    return (
      <div>
        <p>{counter}</p>
        <button onClick={reduceHandler}>-</button>
        <button onClick={addHandler}>+</button>
      </div>
    )
  }
}


