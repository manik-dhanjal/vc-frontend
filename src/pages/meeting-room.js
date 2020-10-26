import React,{useState,useEffect} from "react"
import { useParams} from "react-router-dom"
import io from 'socket.io-client';
import Peer from 'peerjs';




const Room=()=>{
    const {roomId}= useParams()
   
    useEffect(()=>{
        const socket = io.connect("frozen-hollows-67563.herokuapp.com");
        const peer = new Peer(undefined,{
            path: '/peerjs',
            host: 'frozen-hollows-67563.herokuapp.com',
            port: 8080,
           
        })
        
        peer.on('open',id=>{
            console.log(peer)
            socket.emit("join-room",roomId,id)
        })
        const calls={}
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
        socket.on("user-disconnected",userId=>{
               if(calls[userId]) calls[userId].close()
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
         calls[userId]=call
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