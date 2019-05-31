/**
 *@author zhangyuhua
 *@DATE 2019-05-22 11:48
 */
import {observable} from "mobx"

let knightPosition = observable([0,0])


export function moveKnight(toX, toY) {
  knightPosition= [toX, toY]
}


/**
 * @title 移动的逻辑，只能做L型
 */
export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

export default knightPosition;

// function observe(receive) {
//   const randPos = () => Math.floor(Math.random() * 8)
//   setInterval(() => receive([randPos(), randPos()]), 500)
// }

