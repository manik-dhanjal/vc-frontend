import React,{useEffect,useState} from "react"
import styled from "styled-components"
import Input from "../atom/input"
import { v4 as uuidv4 } from 'uuid';

const SNewForm = styled.form`

`
const NewForm=({handleRedirect},props)=>{
    const [state, setstate] = useState({name:"",email:""})
    const uid=uuidv4();
    const handleChange=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
      
        
    }
    const handleSubmit=(e)=>{
      
        e.preventDefault()
        fetch("frozen-hollows-67563.herokuapp.com/create-meet",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({...state,uid:uid}),
            })
            .then(response => response.text())
            .then(data => {
              
              handleRedirect(uid)
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }
    return(
        <>
          <SNewForm className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-10 md:ml-10 md:mr-10" onSubmit={handleSubmit}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Create new Meeting</h2>
            <Input placeholder="Name" type="text" value={state.name} handleChange={handleChange} name="name" required/>
            <Input placeholder="email" type="mail" value={state.email} handleChange={handleChange} name="email" required/>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Create Meet</button>
          </SNewForm>
        </>
    )
}
export default NewForm;