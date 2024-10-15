'use client'

import { Suspense, useState } from "react"
import { alfabeto } from "./alfabeto"
import { useRouter, useSearchParams } from "next/navigation"
import { TextEffect } from "@/efects/TextEffect"
import { IoCloseCircle } from "react-icons/io5";
import { obj } from "@/components/data"

export default function Fonte(){

  const [letter, setLetter] = useState("Aa")
  const searchParams = useSearchParams()
  const fontNameURL = searchParams.get('fonte')
  const urlFormatada = fontNameURL?.replace("+", " ")
  const router = useRouter()
  const [fonte, setFonte] = useState('')
  const r = obj.filter((fonte)=> fonte.name.includes(fonte.name))

  return(
    <Suspense fallback={<div>Loading</div>}>

    <div className={`flex flex-col items-center sm:rounded-lg pb-2 w-[100%] sm:h-[100%]  text-white font-medium tracking-wide`} style={{fontFamily: `${urlFormatada || 'Outfit' }`, background: 'var(--second-color)'}} >

      { /* Titulo */ }
      <div className={`flex justify-between w-[100%] m-5 text-4xl font-bold`}>
        <div className="w-[30%] sm:hidden"></div>
        { /* Nome da fonte */ }
        <div className="w-[40%] sm:w-[100%] flex justify-center items-center text-nowrap"><TextEffect per='word' as='h3' preset='slide'>{fontNameURL || 'Outfit'}</TextEffect></div>
        { /* Botão para fechar o modal no mobile */ }
        <a className="w-[30%] flex justify-end items-center pr-5 cursor-pointer sm:hidden" onClick={() => {  router.push('?modal=false') } }><IoCloseCircle /></a>
      </div>

      <div className="flex flex-col rounded-2xl w-[98%] sm:w-[93%] h-[100%] pb-5 text-4xl">

      { /* Texto de exemplo da fonte */ }
        <div className="flex flex-col items-center text-base">
          <p className="text-lg text-center p-2 bg-[#112E45] rounded-lg sm:bg-transparent" ><TextEffect per='word' as='h3' preset='slide'>Monti di palavris qui num significa nadis i pareci latim.</TextEffect></p>
        </div>

        <div className="flex flex-col sm:flex-row mt-2 w-[100%] sm:h-[100%]">
          
          { /* Exemplo da letra no desktop e alfabeto no mobile */ }
          <div className="flex justify-center items-center text-9xl sm:w-[45%] h-[100%]">

            { /* letra desktop */ }
            <p className="hidden w-[100%] h-[250px] sm:flex justify-center items-center text-8xl transition-all">{letter}</p>
            { /* alfabeto no mobile */ }
            <div className="flex flex-wrap  px-1.5 sm:hidden">{alfabeto.map(letra => <a onClick={ () => {setLetter(letra.letra)} } key={letra.letra} className="flex justify-center items-center w-8 h-8 text-base border border-black/0 cursor-pointer hover:border-white hover:bg-white hover:text-black ">{letra.letra}</a>)}</div>
          </div>

          { /* Exemplo da letra no desktop e alfabeto no mobile */ }
          <div className="flex sm:w-[55%]">
            <div className="hidden sm:flex flex-wrap pr-0 w-[100%]">{alfabeto.map(letra => <a onClick={ () => {setLetter(letra.letra)} } key={letra.letra} className="flex justify-center items-center w-10 h-10 text-xl border-transparent  cursor-pointer hover:border-transparent hover:bg-white hover:text-[#112E45] ">{letra.letra}</a>)}</div>
            <p className="flex w-[100%] h-[200px] justify-center items-center text-[100px] sm:hidden">{letter}</p>
          </div>

        </div>
      </div>
    </div>
    </Suspense>
  )
}