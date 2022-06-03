import { useState } from 'react'
import React from 'react'

const App: React.FC = () => {
  const [text, setText] = useState<string>('')
  const [text2, setText2] = useState<string>('')

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    // console.log("e", e);
    // console.log("e.currentTarget", e.currentTarget);
    // console.log("e.target", e.target);
    // console.log(e.currentTarget === e.target); //true，在此他们相等
    // e.currentTarget总是指向事件绑定的元素，而e.target 则是事件触发的元素。
    setText(e.currentTarget.value)
  }

  const onChange2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // e.target 的类型是EventTarget&HTMLInputElement的交叉类型
    if (e.target.value.length > 30) {
      console.log('error')
      return
    }

    setText2(e.target.value)
  }
  // console.log("text", text);
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <input type="text" value={text2} onChange={(e) => onChange2(e)} />
    </div>
  )
}

export default App
