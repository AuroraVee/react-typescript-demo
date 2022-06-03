import React, { Component } from 'react'
import {type IProps,type Istate} from "./type"


export default class ClassFunc extends Component<IProps, Istate> {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        {this.state.count} {this.props.name}
      </div>
    )
  }
}
