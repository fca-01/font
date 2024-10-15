'use client'

import { Suspense, useState } from "react"
import CardMock from "./CardMock"
import { obj } from "./data"
import { useSearchParams } from "next/navigation"

export default function Card(){
  const searchParams = useSearchParams()
  const urlModal = searchParams.get('modal')
  const urlFilter = searchParams.get('query')
  
  const filterFonts = obj.filter((fonte) => fonte.name.toLowerCase().includes((searchParams.get('query') || '').toLowerCase()))

  if(urlModal == "true"){
    return(
      <Suspense>
        <div className="hidden sm:flex sm:flex-col">
          {filterFonts.map(fonte => <CardMock key={fonte.id} name={fonte.name} style={fonte.style}></CardMock>)}
        </div>
      </Suspense>
    )
  }else{
    return(
      <Suspense fallback={<div>Loading</div>}>
        <div className="">
          {filterFonts.map(fonte => <CardMock key={fonte.id} name={fonte.name} style={fonte.style}></CardMock>)}
        </div>
      </Suspense>
    )
  }
  
}