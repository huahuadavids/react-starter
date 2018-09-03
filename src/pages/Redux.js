import React                  from "react"
import {connect}              from "react-redux"

class Redux extends React.Component {
  render(){
    const {value, reduceHandler, addHandler} = this.props;
    return (
      <div>
        <p>{value}</p>
        <button onClick={reduceHandler}>-</button>
        <button onClick={addHandler}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduceHandler: () => {
      dispatch({type: 'DECREMENT'});
    },
    addHandler: () => {
      dispatch({type: 'INCREMENT'});
    }
  }
};

export default  connect(mapStateToProps, mapDispatchToProps)(Redux);