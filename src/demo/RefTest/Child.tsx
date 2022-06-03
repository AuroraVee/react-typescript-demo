import React from 'react'

type Props = { children: string }
type Ref = HTMLButtonElement

export default React.forwardRef<Ref, Props>((props, ref) => (
  <button ref={ref} className="MyClassName">
    {props.children}
  </button>
))
