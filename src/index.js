/**
 *@author zhangyuhua
 *@DATE 2019-03-26 16:07
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

const Hua = Loadable({
  loader: () =>  import('./pages/hua'),
  loading: Loading,
});

const Dnd = Loadable({
  loader: () =>  import('./pages/chess'),
  loading: Loading,
});

const About = Loadable({
  loader: () =>  import('./pages/About'),
  loading: Loading,
});

const Test = Loadable({
  loader: () =>  import('./pages/Test'),
  loading: Loading,
});

const Redux = Loadable({
  loader: () =>  import('./pages/Redux'),
  loading: Loading,
});

const Demo = Loadable({
  loader: () =>  import('./pages/Demo'),
  loading: Loading,
});

const Menu = Loadable({
  loader: () =>  import('./pages/menu'),
  loading: Loading,
});

const Context = Loadable({
  loader: () =>  import('./pages/context'),
  loading: Loading,
});

const DataContext = React.createContext({
  name: 'david'
})


const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <DataContext.Provider value={'111'}>
        <div id="app">
          <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/hua" exact component={Hua}/>
            <Route path="/dnd" exact component={Dnd}/>
            <Route path="/about" component={About}/>
            <Route path="/test" component={Test}/>
            <Route path="/redux" component={Redux}/>
            <Route path="/demo" component={Demo}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/context" component={Context}/>
            <Redirect path="*" to="/"/>
          </Switch>
        </div>
      </DataContext.Provider>
    </HashRouter>
  </Provider>,
  MOUNT_NODE);
