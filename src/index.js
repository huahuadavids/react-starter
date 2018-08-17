/**
 * @import the dependencies
 */
import React    from 'react';

import ReactDOM from 'react-dom';

import {HashRouter , Route, Redirect, Switch } from "react-router-dom"

import { Provider } from "react-redux"
/**
 * @description A higher order component for loading components with dynamic imports.
 * @get Component-based splitting is better than Route-based splitting
 * @example:  Maybe your app has a map buried inside of a tab component.
 * Why would you load a massive mapping library for the parent route every time
 * when the user may never go to that tab
 */
import Loadable from 'react-loadable';

import store from "./redux"

import './styles/index.css';

import Loading from './components/loading';


/*
 * @description  dynamic import the achieve the code splitting
 * @create-react-app support this
 * @use with babel you  need  babel-plugin-syntax-dynamic-import.
 * @learned from  https://reactjs.org/docs/code-splitting.html
 */

const App = Loadable({
  loader: () =>  import('./pages/App'),
  loading: Loading,
});

const About = Loadable({
  loader: () =>  import('./pages/About'),
  loading: Loading,
});


const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div id="app">
        <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  MOUNT_NODE);
