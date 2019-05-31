/**
 *@author zhangyuhua
 *@DATE 2019-05-22 11:56
 */
import React from "react";
import { DragSource } from 'react-dnd'

const ItemTypes = {
  KNIGHT: 'knight',
}

const knightSource = {
  beginDrag(props, monitor, component ) {
    return {}
  },
  // endDrag(props, monitor, component)

  // 当前是否可以拖拽的事件，可选
  // canDrag(props, monitor):

  // 拖拽时触发的事件，可选。
  // isDragging(props, monitor):


}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}


function Knight({ connectDragSource, isDragging }) {
  return connectDragSource(
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>,
  )
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight)