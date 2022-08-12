import React from 'react'
import { SocialIcon } from 'react-social-icons'

const About = () => {
  return (
    <main className="">
    
    <section className="container sm:p-12 mx-auto sm:flex h-96 sm:my-12">
          <div className="bg-teal-500 p-8">
            <h1 className="text-3xl py-12">About</h1>
          </div>
          <div className="flex flex-wrap bg-yellow-400 p-8">
          
           <p className="mr-4 pb-4 py-12 flex flex-wrap">The projects included here showcase some of my recent development work. Some clients are private freelance contracts, others are collaborations through Moray College / University of the Highlands and Islands department of computing where I work as a researcher.</p>
         
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

export default About