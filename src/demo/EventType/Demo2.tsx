import React, { useState } from 'react'

export default function Demo2() {
  const [current, setCurrent] = useState<number>(0)

  const handleChangeCurrent = (
    item: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    e.stopPropagation() //阻止事件冒泡，点击几就是几，否则返回的是最外层的值
    setCurrent(item)
  }
  console.log(current)

  return (
    <div
      onClick={(e) => handleChangeCurrent(1, e)}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      }}
    >
      1
      <div
        onClick={(e) => handleChangeCurrent(2, e)}
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: 'blue',
        }}
      >
        2
        <div
          onClick={(e) => handleChangeCurrent(3, e)}
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: 'green',
          }}
        >
          3
        </div>
      </div>
    </div>
  )
}
