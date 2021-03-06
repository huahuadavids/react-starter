/**
 *@author zhangyuhua
 *@DATE 2019-05-22 15:32
 */

import React from 'react'
const squareStyle = {
  width: '100%',
  height: '100%',
}
export const Square = ({ black, children }) => {
  const backgroundColor = black ? 'black' : 'white'
  const color = black ? 'white' : 'black'
  return (
    <div style={Object.assign({}, squareStyle, { color, backgroundColor })}>
      {children}
    </div>
  )
}
