import React from "react"
import {Button} from "antd"

// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('red');

//接收一个 函数作为子节点. 函数接收当前 context 的值并返回一个 React 节点。
// 传递给函数的 value 将等于组件树中上层 context 的最近的 Provider 的 value 属性。如果 context 没有 Provider ，
// 那么 value 参数将等于被传递给 createContext() 的 defaultValue
function ThemedButton(props) {
    console.log(props)
    return (
        <ThemeContext.Consumer>
            { theme => {
                console.log(theme)
                return <Button {...props} theme={theme}> button</Button>}
            }
        </ThemeContext.Consumer>
    );
}

// 中间组件
function Toolbar(props) {
    console.log(props)
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

const data = {
            name: 'huaua'
}
export default  class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider  time='1' value={data}>
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}