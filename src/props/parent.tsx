import React from 'react'
import {Child} from './child'
export default function Parent() {
    return <Child name="Getnet" onClick={() => console.log("Name")}> some props</Child>
}
