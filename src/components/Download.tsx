'use client'

import { useSearchParams } from "next/navigation"
import { TextEffect } from "@/efects/TextEffect"
import { Suspense } from "react"
export default function BtnDownload(){
const searchParams = useSearchParams()
let url = searchParams.get('fonte')

  return(
    <div className="font-sans sm:m-0 sm:max-w-[500px] h-[400px] sm:h-[100%] sm:rounded-lg sm:mx-5 pt-5" style={ {background: 'var(--second-color)'} }>
      <div className="flex flex-col w-[100%] px-5 text-left text-sm text-white">
        <h3 className="font-extrabold text-center text-xl pb-5">Licença</h3>
        <p className="pb-4"><TextEffect>Estas fontes estão licenciadas sob a Licença de Fonte Aberta.</TextEffect></p>
        <p className="pb-4"><TextEffect>Você pode usá-las em seus produtos e projetos – impressos ou digitais, comerciais ou não.</TextEffect></p>
        <p className=""><TextEffect>Isto não é um conselho jurídico; por favor, considere consultar um advogado e consulte a licença completa para todos os detalhes.</TextEffect></p>
      </div>
      <div className="flex justify-center p-3">
        <Suspense fallback={<div>Loading</div>}>
          <a href={`https://fonts.google.com/specimen/${url || "Outfit"}`} target="_black" className="flex items-center font-bold text-xl py-2 px-6 mt-4 rounded-full text-[#071A2B] hover:scale-105 hover:ease-out" style={ {background: 'var(--emphasis-color)'} }>Download</a>
        </Suspense>
      </div>
    </div>
  )
}