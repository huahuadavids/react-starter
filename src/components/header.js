import React from "react"

class Header extends  React.Component {
  constructor(){
    super();
    this.state = {
      text: "hello"
    }
  }
  render(){
    const lists = [ "home", "intro", "login" ];
    const headers = lists.map( (value,index,array) => {
      return <li key={value+Math.random()}>{value}</li>
    });

    return (
      <header id="header">
          <ul>
            {headers}
          </ul>
          <div>
            {this.state.text}
          </div>
      </header>
    )
  }
}
export default Header;