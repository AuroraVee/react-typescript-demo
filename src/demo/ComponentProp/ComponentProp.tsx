import React from 'react'

type Iprops = {
  name: string
  age: number
}

export default function ComponentProp(props: Iprops) {
  return (
    <div>
      ComponentProp-{props.age}-{props.name}
    </div>
  )
}
