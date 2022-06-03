import React from 'react'

interface IProps {
  name: string
  children: string
}

const FunctionCom2: React.FC<IProps> = (props) => {
  const { name } = props
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>
        {name}--{props.children}
      </h2>
    </div>
  )
}
export default FunctionCom2
