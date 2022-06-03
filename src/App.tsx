import React from 'react'
import logo from './logo.svg'
import './App.css'
import ClassFunc from './demo/ClassFunc/ClassFunc'
import ClassFunc2 from './demo/ClassFunc2'
import FunctionCom2 from './demo/FunctionCom/FunctionCom2'
import {type PropsType} from "./demo/ClassFunc2/type"
import MyComponent from './demo/FunctionCom/FunctionCom3'
import Demo2 from './demo/EventType/Demo2'
import Handler1 from './demo/EventHandler/Handler1'
import Handler2 from './demo/EventHandler/Handler2'
import Parent from './demo/RefTest/Parent'

function App() {
  return (
    <div className="App">
      <ClassFunc name="wjx" />
      <ClassFunc2<PropsType> name="wjx" age={18} sex="female"></ClassFunc2>
   <FunctionCom2 name='function'>test</FunctionCom2>
   <MyComponent<PropsType> name="wjx" age={18} sex="female"></MyComponent>
    <Demo2></Demo2>
    <Handler1></Handler1>
    <Handler2></Handler2>
    <Parent></Parent>
    </div>
  )
}

export default App
