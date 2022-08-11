import React, {useState, useEffect } from 'react'
import sanityClient from '../client'
import { useParams, NavLink } from 'react-router-dom'
import BlockContent from "@sanity/block-content-to-react";
import {FaExternalLinkAlt} from 'react-icons/fa'


const Project = () => {

    const { slug } = useParams();
    const [project, setProject] = useState(null)

    useEffect(()=> {
        sanityClient
        .fetch(`*[_type == "project" && slug.current == "${slug}"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            secondImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            client,
            "categories": categories[]->{
                title
            },
            body,
            href
            

        }`)
        .then((data)=> setProject(data[0]))
        .catch(console.error)
    },[])

    if(!project) return <div>Loading...</div>
  return (
    <main className=" min-h-screen p-12">
        <header className="container mx-auto bg-white grid grid-cols-1 sm:grid-cols-2 p-12">
            <div className="">
            <h2 className="text-xl p-4">{project.title}</h2>
            <p className="p-4 text-sm">Client: {project.client}</p>
            <div className="flex flex-wrap p-4"><p>Technologies: <br></br>{project.categories && project.categories.map((category)=> (<b className="mr-2 text-sm">{category.title}</b>))}</p></div>
            {project.href ? 
            <a href={project.href}><button className="bg-blue-400 rounded px-4 py-2 flex justify-around"><h4 className="pr-2">Demo / Deployment</h4> <FaExternalLinkAlt /></button></a> : null}
            </div>
            <div className="shadow-lg">
                <img src={project.mainImage.asset.url} alt={project.mainImage.alt} />
            </div>
        </header>

        <section className="container mx-auto bg-white p-12">

            <div className="px-4">
                <BlockContent blocks={project.body} projectId="" dataset="production"/>
            </div>

            <div className="mx-auto pt-12 px-12">
                {
                    project.secondImage ? <img src={project.secondImage.asset.url} alt="" className="shadow-lg "/> : null
                }
            </div>
            
           
        </section>
    </main>
  )
}

export default Project