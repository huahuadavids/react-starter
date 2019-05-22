import React from "react"

export default class Haha extends React.Component {
    constructor(){
      super()
    }
    render(){
      return (
        <div id="haha">
          haha {this.props.name}
        </div>
      )
    }
  }
  

export function withHeader(Com){
    return class HOC extends React.Component {
        render(){
            return (
                <div>
                    <header>this is header</header> 
                    <Com {...this.props}/>
                </div>
            )
        }
    }
}