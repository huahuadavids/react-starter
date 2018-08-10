import React from "react"

class About extends React.Component {
  constructor(){
    super()
    this.state = {
      title: "huahua"
    }
  }
  render(){
    return (
      <div>
        {this.state.title}
      </div>
    )
  }
}

export default About;