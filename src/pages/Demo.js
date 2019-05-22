import React from "react"
import {observer} from 'mobx-react';
import {Input, Form, Menu} from "antd";
import State from "./Demo_state"
import {observable, action} from "mobx"

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

@observer
class About extends React.Component {
    constructor() {
        super()
    }

    handleClick() {
        State.data = 'handle'
    }

    @action setData() {

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Menu>
                    <Menu.Item>菜单项</Menu.Item>
                    <SubMenu title="子菜单">
                        <MenuItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup key="g2" title="Item 2">
                            <Menu.Item key="1">Option 11</Menu.Item>
                            <Menu.Item key="2">Option 12</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                {/*<Form>*/}
                    {/*<FormItem>*/}
                        {/*{*/}
                            {/*getFieldDecorator('input1', {*/}
                                {/*initialValue: State.data.input1*/}
                            {/*})(*/}
                                {/*<Input/>*/}
                            {/*)*/}
                        {/*}*/}
                    {/*</FormItem>*/}
                    {/*<FormItem>*/}
                        {/*{*/}
                            {/*getFieldDecorator('input2', {*/}
                                {/*initialValue: State.data.input2*/}
                            {/*})(*/}
                                {/*<Input/>*/}
                            {/*)*/}
                        {/*}*/}
                    {/*</FormItem>*/}
                    {/*<button onClick={this.handleClick}>click</button>*/}
                    {/*<ListA name={'huahuadavids'}/>*/}
                    {/*<ListB/>*/}
                {/*</Form>*/}
            </div>
        )
    }
}

export default Form.create(
    {
        onValuesChange(a, b) {
            State.data = Object.assign(State.data, b)
            console.log(State.data)
        }
    }
)(About)


function List(Component) {
    return class extends React.Component {

        state = {
            value: 'lista'
        }
        refc = _this => {
            // console.log(_this)
        }
        onChange = e => {
            console.log("hoc onchange")
            this.setState({
                value: e.target.value
            })
        }

        render() {
            const props = {
                value: this.state.value,
                onChange: this.onChange
            }
            return (
                <div id={'list'}>
                    <Component ref={this.refc.bind(this)} {...props}/>
                </div>
            )
        }
    }
}


class FooA extends React.Component {

    state = {
        value: '111'
    }

    shout() {
        console.log("shouting ")
    }

    onChange = e => {
        const v = e.target.value;
        this.setState((prevState, props) => {
            console.log(prevState)
            console.log(props)
            return {
                value: v
            }
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.onChange}/>
                <div>this is foo a</div>
                <div>{this.props.name}</div>
            </div>
        )
    }
}


class FooB extends React.Component {
    render() {
        return (
            <div>
                <input type="text" {...this.props}/>
                this is foo b
            </div>
        )
    }
}


const ListA = List(FooA)


const ListB = List(FooB)