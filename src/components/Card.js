import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Card = ({project, index}) => {

    const [opacity, setOpacity] = useState(false)

    const cols = ["bg-green-400", "bg-cyan-400", "bg-yellow-400", "bg-pink-400", "bg-pink-600", "bg-red-500", "bg-lime-400", "bg-cyan-400"]
  
    // const lighten = (string) => {
    //     const parts = string.split("-")
    //     const num = parseInt(parts[2])
    //     const strnum = (num - 100).toString()
    //     return parts[0]+"-"+parts[1]+"-"+strnum
    // }
    const hover = () => {
        setOpacity(true)
    }

    const unhover = () => {
        setOpacity(false)
    }

  
    return (
        <article className="relative shadow-lg" onMouseOver={hover} onMouseOut={unhover}>
        <NavLink to={"/projects/"+project.slug.current} >
            <div className={`flex bg-red-500 static justify-end w-full h-96 ${opacity ? "opacity-80" : ""}`}>
                <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="object-cover relative"/> 
            
            </div>
            <div className={`absolute p-4 flex flex-col justify-between ${cols[index]} h-96 w-56 bottom-0`}>
                <h4>{project.title}</h4>
                
                <div className="flex flex-wrap w-56 text-sm">
                    {project.categories && project.categories.map((category)=> (
                        <p className={`underline p-2 mr-2 rounded `}>{category.title}</p>
                    ))}
                </div>
            </div>
        </NavLink>
        </article>
    //     <NavLink to={"/projects/"+project.slug.current} >
    // <div className="bg-stone-300 ">
        
    //     <div className="flex h-96 relative ">

    //         <div className={`${cols[index]} p-4 text-left flex flex-col justify-between absolute h-96 w-64`}>
    //             <h4>{project.title}</h4>
                
    //             <div className="flex flex-wrap w-64 text-sm">
    //                 {project.categories && project.categories.map((category)=> (
    //                     <p className={`underline p-2 mr-2 rounded `}>{category.title}</p>
    //                 ))}
    //             </div>
    //         </div>
    //         <div className="flex justify-end w-full ">
                
    //             {/* <img src={project.mainImage.asset.url} alt={project.mainImage.alt} /> */}
    //             <img src={project.mainImage.asset.url} alt={project.mainImage.alt} className="w-full h-full object-cover"/>

    //         </div>
    //     </div>

    //     <div className="p-4 align-text-bottom">
    //         <p>{project.client}</p>
    //     </div>
        
    // </div>
    // </NavLink>
  )
}

export default Card