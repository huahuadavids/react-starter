import React from "react"
import Detail from "../components/Detail"

class Test extends React.Component {
  constructor(){
    super()
    const state = Object.create(null)
    state.text = "starbucks"
    this.state =  state;
    this.click = this.click.bind(this)
  }
  click(){
    // setState a function rather than an object
    // because set state is asynchronous
    // When you call setState(), React merges the object you provide into the current state.
    this.setState( (prev,props) => ({
      text: prev.text + "-ha"
    }))
  }
  render(){
    const arr = Array.prototype.slice.call("123456")
    const list = arr.map( num => {
      //Keys help React identify which items have changed, are added, or are removed
      // keys no need to be unique globally only between siblings
      return <li key={num}>{num}</li>
    })
    return (
      <div id="Test" {...this.state}>
        this is  {this.state.text}
        <div>
          <button onClick={this.click}>click me </button>
        </div>
        { 1 > 0  &&
          <h2>
            You have {1} unread messages.
          </h2>
        }
        <ul>
          {list}
        </ul>
        <Detail text="haha"/>
      </div>
    )
  }
}

export default Test;