import React from 'react'
import Child from './Child'
export default function Parent() {
  const ref = React.useRef('ee')

  return (
    <div>
      Parent
      <Child ref={ref}>eee</Child>
      <button onClick={() => console.log(ref.current)}>click</button>
    </div>
  )
}
