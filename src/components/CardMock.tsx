'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

type CardProps = {
  name: string;
  style: string;
}

export default function CardMock({name, style}: CardProps){

  const router = useRouter()

  const url = name.replace('_', ' ').split(' ')
  const urlFormatada = url.map((palavra) => {return palavra.charAt(0).toUpperCase() + palavra.substring(1)}).join(" ").replace(" ", "+")

  function routers(){
    router.push(`?fonte=${urlFormatada}&modal=${true}&query=`, {scroll:false})
  }

  return(
    <div className='flex justify-center items-center p-4 mx-5 mb-5 rounded-lg hover:scale-105 text-white' style={ {background: 'var(--second-color)'} }>
      <a onClick={() => routers()}>

        <div className='flex justify-between'>
        <h2 className='mb-1 text-lg'>{urlFormatada.replace("+", " ")}</h2>
        <div className='flex justify-center items-center border border-[#1BB3F7] px-2 my-1 rounded-xl text-sm sm:hidden md:flex'>{style}</div>
        </div>

        <Image 
          src={`/${name}.png`}
          alt=""
          width={600}
          height={600}
          className='cursor-pointer rounded-lg'
        ></Image>
      </a>
    </div>

  )
}