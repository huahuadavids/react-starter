import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import Header from "../components/header"
import {AreaChart, XAxis, Tooltip, YAxis, Label, Area, LabelList, Legend, CartesianGrid, Line} from "../chart-d3"


const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290, time: 9},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10},
  {name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12},
  {name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16},
  {name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18},
];


const renderLabel = (props) => {
  const {index, x, y} = props;

  return <text x={x} y={y} className="customized-label">{index}</text>;
};


const renderCustomizedActiveDot = (props) => {
  const {cx, cy, stroke, index, dataKey} = props;

  return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={`dot-${dataKey}`}/>;
};


class App extends Component {
  render() {

    const data = [
      11, 22
    ]
    return (
      <div className="App">

        <div className="area-chart-wrapper">
          <AreaChart width={800} height={400} data={data}
                     margin={{top: 20, right: 80, left: 20, bottom: 5}}
                     syncId="test"
          >
            <XAxis dataKey="time" type="number">
              <Label position="insideTopRight" offset={-30}>province</Label>
            </XAxis>
            <YAxis/>
            <Tooltip/>
            <Area
              stackId="0"
              type="monotone"
              dataKey="uv"
              stroke="#ff7300"
              fill="#ff7300"
              dot
              activeDot={renderCustomizedActiveDot}
              hide
            >
              <LabelList position="top"/>
            </Area>
            <Area
              stackId="0"
              type="monotone"
              dataKey="amt"
              stroke="#82ca9d"
              fill="#82ca9d"
              dot
              activeDot={renderCustomizedActiveDot}
              label={renderLabel}
            />
            <Area
              stackId="0"
              type="monotone"
              dataKey="pv"
              stroke="#387908"
              fill="#387908"
              animationBegin={1300}
              dot
              activeDot={renderCustomizedActiveDot}
            >
              <LabelList position="top"/>
            </Area>
            <Legend layout="vertical" align="left" verticalAlign="middle"/>
          </AreaChart>
        </div>


      </div>
    );
  }
}


class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }


  add  = () => {
    this.setState({
      count : this.state.count +1
    })

    console.log(" " + this.state.count)

    this.setState({
      count : this.state.count +1
    })


    console.log(" " + this.state.count)


    setTimeout(() => {
      this.setState({
        count : this.state.count +1
      })

      console.log(" " + this.state.count)

      this.setState({
        count : this.state.count +1
      })

      console.log(" " + this.state.count)
    },10)
  }

  render() {
    console.log("render")
    return (
      <div>
      <button onClick={this.add}>click</button>

      </div>
    )
  }
}


export default Demo;
