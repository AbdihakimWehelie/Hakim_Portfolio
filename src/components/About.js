import React,{useEffect, useState} from "react";
import sanityClient from "../client.js";
import background from "./background.jpg";
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import pdf from '../media/Abdihakim_Wehelie_Junior_front_end_developer_resume_.pdf';
import FadeIn from 'react-fade-in';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  console.log(source);
  return (
    builder.image(source)
  );
}


export default function About(){

    const [author, setAuthor]= useState(null);

    useEffect(()=>{
          sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
          }`).then((data)=>setAuthor(data))
          .catch(console.error);
    }, [])

    if(!author){
      console.log(author);
      return <div>Loading..</div>
    }

    else
    {console.log("Data is not null");
      console.log(author);
    console.log(author[0].name);
    console.log(author[0].bio);
    }

    return(
          <FadeIn>
          <main className="relative">
            <img src={background} className="absolute object-cover w-full h-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-600 rounded-lg shadow-2xl lg:flex p-20 my-10">
                    <img src={urlFor(author[0].authorImage).url()} className="rounded w-32 h-65 lg:w-64 lg:h-128 mr-8" alt={author[0].name}/>
                    <div className="text-sm lg:text-lg flex flex-col justify-center text-yellow-400 cursive"
                    style={{fontFamily:"Paprika"}}>
                    <h1>Hello. My name is {author[0].name}.</h1>
                        <BlockContent blocks={author[0].bio} projectId="myl7azx3" dataset="production"/>
                        <div>
                        <a href={pdf} target="_blank">
                        <button class="flex bg-yellow-400 hover:bg-blue-700 text-blue-500 hover:text-yellow-500 font-bold py-2 px-4 rounded">
                              Click here to view my resume
                        </button>
                        </a>
                        </div>
                    </div>
                </section>
            </div>
          </main>
          </FadeIn>
    )

}
