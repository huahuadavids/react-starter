import React from "react"
import Haha, {withHeader} from "../components/Haha"
import "react-table/react-table.css"
import ReactTable from 'react-table'
const WithHeaderhaha = withHeader(Haha);

const item = [
  {
  name: 'Tanner Linsley',
  age: 26,
  friend: {
    name: 'Jason Maurer', age: 23,
  }
},
{
  name: 'David Linsley',
  age: 22,
  friend: {
    name: 'Tom Maurer', age: 18,
  }
}
]
const data = []

for(let a = 0; a< 120; a++){
   data.push(...item)
}

const columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!
}, {
  Header: 'Age',
  accessor: 'age',
  align:'center',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'friendName', // Required because our accessor is not a string
  Header: 'Friend Name',
  accessor: d => d.friend.name // Custom value accessors!
}, {
  Header: props => <span>Friend Age</span>, // Custom header components!
  accessor: 'friend.age'
}]

export default class Hua extends React.Component {
  constructor(){
    super()
  }

  render(){   
    // 简单深拷贝
    let a = {
        name : 'david'
    }
    let b = {...a}
    
    // 结构赋值别名 
    let {name : mingzi} = b;
    console.log(mingzi)

    let c = [1,2,4]
    console.log(...c)
    return (
      <div id="Test">
        huahua 
        <WithHeaderhaha name='mayun'/>

        <ReactTable
          data={data}
          columns={columns}
        />
      </div>
    )
  }
}

