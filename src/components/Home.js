import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Home = () => {
  return (
    <main className="">
    
        <section className="container p-12 mx-auto flex h-96 sm:my-12">
          <div className="bg-red-500 p-8">
            <h1 className="text-3xl py-12">Neil Davidson Portfolio</h1>
          </div>
          <div className="flex flex-wrap bg-blue-400 p-8">
          <NavLink to="/projects">
           <p className="mr-4 pb-4 py-12 hover:underline flex flex-wrap">Recent freelance and contract front end / full stack web development projects</p>
           </NavLink>
           {/* <NavLink to="/projects">
           <FaArrowRight style={{height: "4rem", width: "4rem", background: "#60A5FA", borderRadius: "5px", padding: "6px", color: "black"}}/>
           </NavLink> */}
          </div>
            
        </section>

        <footer className="absolute bottom-0 w-full">
          <div className="container mx-auto flex justify-between pb-2 px-12">
            <p>ndvdsn@proton.me</p>
            <SocialIcon url="https://www.linkedin.com/in/neil-j-davidson/" className="mr-4" target="_blank" fgColor="#252626" bgColor="#fff" style={{ height: 30, width: 30} }/>
            <SocialIcon url="https://github.com/ndvdsn" className="mr-4" target="_blank" fgColor="#252626" bgColor="#fff" style={{ height: 30, width: 30} }/>
          </div>
        </footer>
    </main>
  )
}

export default Home