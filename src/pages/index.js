import React,{useState} from "react"
import JoinForm from "../components/molecule/join-meeting-form"
import NewForm from "../components/molecule/new-meeting-form"
import { Redirect } from "react-router-dom";




const Home=()=>{
const [redirect,setRedirect]=useState(null)
const handleRedirect=(uid)=>{
  setRedirect(`/meeting-room/${uid}`)
}
  if (redirect) {
    return <Redirect to={redirect} />
  }
  return(
    <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
      <NewForm handleRedirect={handleRedirect}/>
      <JoinForm handleRedirect={handleRedirect}/>
    </div>
    </section>
) 
}
export default Home