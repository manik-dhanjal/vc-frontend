import React from "react"
import styled from  "styled-components"

const SInput =styled.div`
input{
    width:100%;
}
`

const Input =({handleChange,...otherprops})=>{
    return(
        <SInput>
             <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" {...otherprops} onChange={handleChange}/>
        </SInput>
        )
}

export default Input
