import React from "react"
import styled from "styled-components"
import logo from "../../assets/images/zoom.png"
const SHeader = styled.header`
.logo{
width:70px;
}
`

const Header=()=>{
    return(
        <SHeader>
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                       <span className="logo"> <img src={logo}/></span>
                    <span className="ml-3 text-xl">Zoom</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">First Link</a>
                    <a className="mr-5 hover:text-gray-900">Second Link</a>
                    <a className="mr-5 hover:text-gray-900">Third Link</a>
                    <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                </div>
                </header>
        </SHeader>
    )
}

export default Header