import React from 'react'
import {type ILogin} from "./type"
import {loginReq} from "./api"

const Example:React.FC<ILogin>=(props)=>{
    loginReq(props).then((res)=>{
        console.log(res.data.code)
    })
    return <></>
}

export default Example
