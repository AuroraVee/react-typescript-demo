import * as React from 'react'

type changeFn = (e: React.FormEvent<HTMLInputElement>) => void

const Handler2: React.FC = () => {
  const [state, setState] = React.useState<string>('')

  const onChange: changeFn = (e) => {
    setState(e.currentTarget.value)
  }
  console.log('change', state)

  return (
    <div>
      <input type="text" value={state} onChange={onChange} />
    </div>
  )
}
export default Handler2
