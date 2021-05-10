import React from "react"
import FadeIn from "react-fade-in"
import background from "./background.jpg"


export default function Home(){

      return (
          <FadeIn>
          <main>
          <img src={background} className="absolute object-cover w-full h-full"/>
          <section className="relative flex justify-center min-h screen   lg:flex p-20 pt-12">
          <h1 style={{color:"gold", fontSize:"50px", fontFamily:"Paprika"}}>Hello and welcome
           to Abdihakim's Portfolio page</h1>
          </section>
        </main>
          </FadeIn>
      )
}
