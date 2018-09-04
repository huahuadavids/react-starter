import {DECREMENT, INCREMENT} from "../type";

const add = () => ({
  type: INCREMENT
})

const minus = () => ({
  type: DECREMENT
})

export  {
  add, minus
}