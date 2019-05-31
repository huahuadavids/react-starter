/**
 *@author zhangyuhua
 *@DATE 2019-05-22 15:30
 */

import React from 'react'
import { DragSource, DragPreviewImage } from 'react-dnd'
import ItemTypes from './ItemTypes'
import knightImage from './KnightImage'
const knightStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
}
const Knight = ({ connectDragSource, connectDragPreview, isDragging }) => {
  return (
    <div>
      <DragPreviewImage connect={connectDragPreview} src={knightImage} />
      <div
        ref={connectDragSource}
        style={Object.assign({}, knightStyle, {
          opacity: isDragging ? 0.5 : 1,
        })}
      >
        ♘
      </div>
    </div>
  )
}
export default DragSource(
  ItemTypes.KNIGHT,
  {
    beginDrag: () => ({}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }),
)(Knight)
