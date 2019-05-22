import React from "react";

/**
 *@author zhangyuhua
 *@DATE 2019-05-22 11:56
 */

export default function Square({ black , children}) {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'white' : 'black'
  return (
    <div style={{backgroundColor: fill, color: stroke, width: '100%', height: '100%',}} >
      {children}
    </div>
  )
}