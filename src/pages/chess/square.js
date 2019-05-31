import React from "react";
import { DropTarget } from 'react-dnd'
import { canMoveKnight, moveKnight } from './game'
/**
 *@author zhangyuhua
 *@DATE 2019-05-22 11:56
 */

const ItemTypes = {
  KNIGHT: 'knight',
}

const squareTarget = {
  drop(props) {
    moveKnight(props.x, props.y)
  },
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}


function Square({ black , children}) {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'
  return (
    <div style={{backgroundColor: fill, color: stroke, width: '100%', height: '100%',}} >
      {children}
    </div>
  )
}

function renderOverlay(color) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    />
  )
}

function BoardSquare({ x, y, connectDropTarget, isOver, canDrop, children }) {
  const black = (x + y) % 2 === 1

  return connectDropTarget(
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && renderOverlay('red')}
      {!isOver && canDrop && renderOverlay('yellow')}
      {isOver && canDrop && renderOverlay('green')}
    </div>,
  )
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare)