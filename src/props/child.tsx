import React from 'react'

interface ChildProps{
    name:string,
    onClick:() => void
}

// export function Child({name,onClick}:ChildProps) {
// return  <>
// <h1>Hi {name}</h1>
// <button onClick={onClick}>Click Me</button>
// </>  
// }

export const Child:React.FC<ChildProps> = ({name,onClick,children})  => {
    return  <>
    <h1>Hi {name}</h1>
     {children}
    <button onClick={onClick}>Click Me</button>
    </>  
}


    