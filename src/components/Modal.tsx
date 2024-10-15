'use client'

import BtnDownload from "./Download";
import Fonte from "./Font";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from "./Footer";
import { Suspense } from "react";

export default function Modal(){
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  const router = useRouter()

  if(modal == 'true'){
    return(
      <Suspense fallback={<div>Loading</div>}>
        <div className="sm:hidden w-[100%] top-0 relative ">
          <Fonte></Fonte>
          <BtnDownload></BtnDownload>
          <Footer></Footer>
        </div>
      </Suspense>
    )}
    else{
      return null
    }
  }

 
