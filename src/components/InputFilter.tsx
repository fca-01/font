'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { CiSearch } from "react-icons/ci";

export default function InputFilter(){

  const router = useRouter()
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  
  if(modal === 'true'){
  return(
    <div className="hidden sm:flex relative items-center mx-5 mb-5 text-base sm:text-xs md:text-base">
      <input 
      className="border-none rounded-lg w-[100%] h-10 px-4 cursor-text placeholder:text-slate-400 outline-none" type="text" 
      style={{background: 'var(--second-color)'}}
      onChange={(query) => router.replace(`?&query=${query.target.value}`)}
      placeholder="Pesquise por uma fonte."
      />
      <CiSearch className="absolute w-5 h-5 right-0 text-slate-400 mx-2 " style={{background: 'var(--second-color)'}}/>
    </div>
  )
}else{
  return(
    <div className="flex relative items-center mb-5 mx-5 text-base sm:text-xs md:text-base text-white">
      <input 
      className="border-none rounded-lg w-[100%] h-10 px-4 cursor-text placeholder:text-slate-400 outline-none" type="text" 
      style={{background: 'var(--second-color)'}}
      onChange={(query) => router.replace(`?&query=${query.target.value}`)}
      placeholder="Pesquise por uma fonte."
      />
      <CiSearch className="absolute w-5 h-5 right-0 text-slate-400 mx-2 " style={{background: 'var(--second-color)'}}/>
    </div>
  )

}}