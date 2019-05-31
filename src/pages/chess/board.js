import React from "react";
import Knight from "./knight"
import BoardSquare from "./square"
import {moveKnight, canMoveKnight} from "./game"
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
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

function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}


export default class Board extends React.Component {
  constructor(){
    super()
  }

  render(){
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i, this.props.knightPosition))
    }

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className='board'>
          {squares}
        </div>
      </DragDropContextProvider>
    )
  }
}

