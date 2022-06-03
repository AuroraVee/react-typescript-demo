import ComponentProp from './ComponentProp'
import React from 'react'

// 自动推算出某个react组件的props类型
type targetProps = React.ComponentProps<typeof ComponentProp>

type newType = Omit<targetProps, 'age'>

const a: newType = {
  name: 'wjx',
}
