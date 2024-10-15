'use client'
import { useState } from "react"

export default function Header(){
  const fonte = 'Fondamento'
  const [darkMode, setDarkMode] = useState(false)

  return(
    <div className=" flex top-0 justify-center items-center border-b-2 border-b-[#1BB3F7] w-[100vw] text-white bg-[#0e273b] ">    
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link href={`https://fonts.googleapis.com/css2?family=${fonte}&display=swap`} rel="stylesheet"></link>

      <div className="flex justify-center md:justify-start 2xl:justify-center items-center w-[100%] top-0 py-3 sm:pl-5" >
      <a href="/?fonte=Outfit&modal=true&query=" className={`font-koulen text-4xl mx-2 dark:text-white`} style={{fontFamily: `${fonte}`}}>Free Fonts</a>
    </div>
    </div>

  )
}