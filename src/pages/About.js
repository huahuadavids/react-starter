import React from "react"
import {Input} from "antd"

class About extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "huahua"
        }
    }

    hanldleChange = (e) => {
        console.log(e.target.value)
        console.log(this)
    }

    render() {
        return (
            <div>
                <Widget name={'huahua'}/>
                <Hoc1 name={'lili'}/>
            </div>
        )
    }
}


class Widget extends React.Component {
    render() {
        return (
            <div>
                this is a small widget
                <div>
                    {this.props.name}
                </div>
            </div>
        )
    }
}

/**
 * @name 第一种实现方式 props proxy  属性代理
 * @param Component
 * @returns
 * */
const hoc = Component => class extends React.Component {
    render() {
        return (
            <div className={'hoc'}>
                <Component {...this.props} />
            </div>
        )
    }
}


const Hoc1 = hoc(Widget)

/**
 * @name 第二种方式 反向继承
 */


class Books extends React.Component {
    render(){
        return (
            <div>
                this is many books
            </div>
        )
    }
}



export default About;