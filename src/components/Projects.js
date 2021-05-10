import React, {useEffect, useState} from "react"
import sanityClient from "../client.js"
import FadeIn from 'react-fade-in';

export default function Projects(){

    const [projectData, setProjectData]= useState(null)


    useEffect(()=>{
        sanityClient.fetch(`*[_type == "projects"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          DemoLink,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    console.log(projectData);


    return(
      <main className="bg-blue-150 min-h screen p-12">
          <FadeIn>
          <section className="container mx-auto">
          <h2 style={{fontFamily:"Paprika"}} className="text-3xl text-yellow-500 flex justify-center cursive">Projects</h2>
          <h3 style={{fontFamily:"Paprika"}} className="text-lg  text-yellow-500 font-blog flex justify-center mb-12">Various apps made with various tools</h3>
              <FadeIn>
              <section className="grid sm:grid-cols-2 gap-8 grid-cols-1 ">
                  {projectData && projectData.map( (project,index)=>(
                    <article className="relative rounded-lg shadow-xl bg-white p-16"
                    style={{backgroundImage:`url(${project.mainImage.asset.url})`,
                            backgroundSize:"cover",
                          backgroundPosition:"center",
                        whiteSpace: "pre-wrap"}}>
                      <div className="overflow-visible" style={{backgroundColor:"rgba(250, 250, 250, 0.8)", borderRadius:"12px", Opacity:"60%"}}>
                      <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-purple-600">
                        <a
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        >{project.title}
                        </a>
                      </h3>
                      <div className="text-gray-500 text-xs space-x-4 cover grid">
                          <span>
                          <strong className="font-bold text-xm">Finished on: </strong>
                          {new Date(project.date).toLocaleDateString()}
                          </span>
                          <span>
                          <strong className="font-bold text-xm">Type: </strong>
                          {project.projectType}
                          </span>
                          <p className="my-6 lg:text-lg text-sm text-gray-700 leading-relaxed flex cover">{project.description}</p>
                          <a href={project.link}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-blue-600 font-bold hover:text-purple-400">
                          View the project{""}
                          <span role="img" aria-label="right-pointer">
                            👉
                          </span>
                          </a>
                          <a href={project.DemoLink}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-blue-600 font-bold hover:text-purple-400">
                          Live Demo{""}
                          <span role="img" aria-label="right-pointer">
                            👉
                          </span>
                          </a>
                      </div>
                      </div>
                    </article>
                  ))}
              </section>
              </FadeIn>
          </section>
          </FadeIn>
      </main>
    )
}
