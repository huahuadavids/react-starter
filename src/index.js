/**
 * @import the dependencies
 */
import React    from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Route, Redirect} from "react-router-dom"
import { Provider } from "react-redux"

import store from "./redux"
import './styles/index.css';
import App      from './pages/App';
import About      from './pages/About';

const MOUNT_NODE = document.getElementById('root');

console.log(process.env.NODE_ENV)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div id="app">
        <Route path="/" exact component={App}> </Route>
        <Route path="/about" component={About}></Route>
      </div>
    </HashRouter>
  </Provider>,
  MOUNT_NODE);

