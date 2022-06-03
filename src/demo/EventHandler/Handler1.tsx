import React from 'react'

export default function Handler1() {
  const handleChangeCurrent: React.MouseEventHandler<HTMLDivElement> = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    console.log(e.clientX)
  }
  return <div onClick={(e) => handleChangeCurrent(e)}>1</div>
}
