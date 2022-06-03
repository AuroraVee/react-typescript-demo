import React from 'react'
interface IProps {
  name: string
}

export default function FunctionCom(props: IProps) {
  return <div>FunctionCom-{props.name}</div>
}
