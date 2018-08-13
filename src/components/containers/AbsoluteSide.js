import React, { Component } from 'react'
import { Tooltip } from 'reactstrap'

export default class AbsoluteSide extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tooltipOpen: false
    }
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  style = () => ({
    flex: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    },
    absolute: {
      position: 'fixed',
      top: 0,
      right: 25,
      width: 50,
      height: '100%'
    },
    line: {
      stroke: '#222222',
      strokeWidth: 4,
      strokeLinecap: 'round'
    }
  })

  makeLines = props => {
    if (!props) return

    let arr = [1, 2, 3]
    let start = props / 2 - 80
    let lines = []

    for (let i in arr) {
      let obj = {
        key: i,
        active: false,
        start: String(start),
        end: String(start + 40)
      }
      lines.push(obj)
      start += 60
    }

    lines[0].active = true

    return (
      <svg height='100%' width='100%'>
        {lines.map(
          item =>
            (item.active
              ? <circle
                cx='25'
                cy={String(parseInt(item.start) + 20)}
                r='20'
                fill='none'
                style={this.style().line}
                />
              : <line
                x1='25'
                y1={item.start}
                x2='25'
                y2={item.end}
                style={this.style().line}
                key={item.key}
                />)
        )}
      </svg>
    )
  }

  render () {
    return (
      <div style={this.style().flex}>
        <div style={this.style().absolute}>
          {this.makeLines(this.props.height)}
        </div>
      </div>
    )
  }
}
