import React from "react";
import Knight from "./knight"
import Square from "./square"
import {moveKnight, canMoveKnight} from "./game"

// function renderSquare(x, y, [knightX, knightY]) {
//   const black = (x + y) % 2 === 1
//   const isKnightHere = knightX === x && knightY === y
//   const piece = isKnightHere ? <Knight /> : null
//   return <Square black={black}>{piece}</Square>
// }

function handleClick(x, y) {
  console.log(x,y)
  if(canMoveKnight(x,y)){
    moveKnight(x, y)
  }
}



function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} onClick={() => handleClick(x,y) }
         style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}

export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div className='board'>
      {squares}
    </div>
  )
}