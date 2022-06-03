type LazyExoticComponent<
  T extends React.ComponentType<any>
> = React.ExoticComponent<React.ComponentPropsWithRef<T>> & {
  readonly _result: T
}

//   type lazy<T extends React.ComponentType<any>>(
//   factory: () => Promise<{ default: T }>
//   )=> LazyExoticComponent<T>;

import React from 'react'

export interface RouteType {
  pathname: string
  component: LazyExoticComponent<any>
  exact: boolean
  title?: string
  icon?: string
  children?: RouteType[]
}
export const AppRoutes: RouteType[] = [
  {
    pathname: '/login',
    component: React.lazy(() => import('../ClassFunc/ClassFunc')),
    exact: true,
  },
  {
    pathname: '/404',
    component: React.lazy(() => import('../ClassFunc2')),
    exact: true,
  },
  {
    pathname: '/',
    exact: false,
    component: React.lazy(() => import('../FunctionCom/FunctionCom')),
  },
]
