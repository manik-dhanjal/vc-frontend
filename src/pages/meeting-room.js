import React,{useState,useEffect} from "react"
import { useParams} from "react-router-dom"
import io, { connect } from 'socket.io-client';
import Peer from 'peerjs';




const Room=()=>{
    const {roomId}= useParams()
   
    useEffect(()=>{
        const socket = io.connect("localhost:8000");
        const peer = new Peer(undefined,{
            host:"localhost",
            port:"8001"
        })
        peer.on('open',id=>{
            socket.emit("join-room",roomId,id)
        })
        
        const myVideo=document.createElement("video")
        var videoCont=document.querySelector(".video-cont")
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then(stream=>{
           
            videoHandler(myVideo,stream)
            peer.on('call',(call)=>{
                console.log('recieved call',call)
                call.answer(stream)
                const video=document.createElement('video')
                call.on('stream',(userVideoStream)=>{
                    console.log(userVideoStream,'stream')
                   videoHandler(video,userVideoStream)
                })
                call.on('close',()=>{
                    video.remove();
                })
            })
            socket.on("user-added",(userId)=>{
                console.log(userId,'added')
              connectToNewUser(userId,stream)
            })
        })
        
        const connectToNewUser=(userId,stream)=>{
         var call=peer.call(userId,stream)
         const video=document.createElement('video')
         call.on('stream',(userVideoStream)=>{
             console.log(userVideoStream,'stream')
            videoHandler(video,userVideoStream)
         })
         call.on('close',()=>{
             video.remove();
         })
        }
        const videoHandler=(video,stream)=>{
        video.srcObject=stream;
            video.addEventListener("loadedmetadata",e=>{
                video.play();
                videoCont.append(video)
            })
        }

    })

    return(
        <>
            <h1>this is meeting room</h1>
            <div className="video-cont">
             
            </div>
        </>
    )
}

export default Room