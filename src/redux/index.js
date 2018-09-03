/**
 * @url https://segmentfault.com/a/1190000012976767
 */

import { createStore } from 'redux';
import reducers from "./reducers"

let store = createStore(reducers);
export default store;