import React,{useEffect,useState} from "react"
import styled from "styled-components"
import Input from "../atom/input"
const SNewForm = styled.form`

`
const JoinForm=({handleRedirect})=>{
    const [state, setstate] = useState({name:"",email:"",code:""})

    const handleChange=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch("localhost:8000/join-meet",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(state),
            })
            .then(response => response.text())
            .then(data => {
              handleRedirect(state.code)
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }
    return(
        <>
          <SNewForm className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-10 md:ml-10 md:mr-10" onSubmit={handleSubmit}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Join Meeting</h2>
            <Input placeholder="Name" type="text" value={state.name} handleChange={handleChange} name="name" required/>
            <Input placeholder="email" type="mail" value={state.email} handleChange={handleChange} name="email" required/>
            <Input placeholder="Meeting Code" type="text" value={state.code} handleChange={handleChange} name="code" required/>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join Meet</button>
          </SNewForm>
        </>
    )
}
export default JoinForm;