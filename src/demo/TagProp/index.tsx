// 标签属性一般用在封装组件库的时候

import React from 'react'
import { classNames } from './classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> // 使用 交叉类型（&） 获得我们自己定义的属性和原生 button 的属性
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> // 使用 交叉类型（&） 获得我们自己定义的属性和原生 a标签 的属性

// 让交叉后的属性成为可选属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> //使用 Partial<> 使两种属性可选

const Button: React.FC<ButtonProps> = (props) => {
  const {
    disabled,
    className,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled, // 只有 a 标签才有 disabled 类名，button没有
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
                        {children}
                    
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled} // button元素默认有disabled属性，所以即便没给他设置样式也会和普通button有一定区别
        {...restProps}
      >
                        {children}
                    
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button
