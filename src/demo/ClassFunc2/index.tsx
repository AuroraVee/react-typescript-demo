import React, { Component } from 'react'
import {type IProps} from "./type"
//泛型继承导入的类型
// 在使用时明确具体的类型

export default class ClassFunc2<P extends IProps> extends Component<P> {
  render() {
    return (
      <div>{this.props.age}-{this.props.name}</div>
    )
  }
}
