
/**
 *@author zhangyuhua
 *@DATE 2019-05-22 15:28
 */
import React from 'react'
import Example from './example'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default function App() {
  return (
    <div className="App">
      <DragDropContextProvider backend={HTML5Backend}>
        <Example />
      </DragDropContextProvider>
    </div>
  )
}


