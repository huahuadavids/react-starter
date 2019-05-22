import React from "react";
import {Provider} from "./Context"

export default  class HashRouter extends React.Component {
  constructor(){
    super();
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    };
  }
  componentDidMount() {
    const { location } =  window;

    // if no hash redirect to /
    location.hash = location.hash || '/';

    // listen hash
    window.onhashchange =  () => {
      this.setState({
        location :{
          ...this.state.location,
          pathname:  window.location.hash.slice(1) || '/'
        }
      })
    }
  }

  render(){
    const value = {
      location: this.state.location
    };
    return (
      <Provider value={value}>
        {
          this.props.children
        }
      </Provider>
    )
  }
}