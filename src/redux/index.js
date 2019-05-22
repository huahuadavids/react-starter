/**
 * @url https://segmentfault.com/a/1190000012976767
 * @offcial https://redux.js.org/basics/reducers
 */

import   { createStore } from 'redux';
import reducers from "./reducers"

let store = createStore(reducers);
export default store;