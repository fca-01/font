'use client'

import Card from "@/components/Card";
import Fonte from "@/components/Font";
import Download from "@/components/Download";
import Modal from "@/components/Modal";
import InputFilter from "@/components/InputFilter";
import { Suspense, useState } from "react";
import Footer from "@/components/Footer";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import FontLoader from "@/components/FontLoader";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Suspense fallback={<div>Loading</div>}>

    <div className={`${darkMode && 'dark'} flex flex-col justify-center items-end`} >
      <DarkModeSwitch
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
        className="sticky top-5 right-10 text-white bg-transparent z-50"
      />

      <div className="flex items-start justify-center w-[100%] dark:bg-[#112E45] pt-9 lg:pt-20">

        <Suspense fallback={<div>Carregando fonte...</div>}>
          <FontLoader />
        </Suspense>

        <div className="absolute mt-0">
          <Modal />
        </div>

        <div className="w-[400px] pb-[60vh] sm:pb-0 sm:mb-16 mt-3 lg:mt-0 ">
          <InputFilter />
          <Card />
        </div>

        <div className="sticky top-20 w-[900px] hidden flex-col sm:flex lg:flex-row mb-24">
          <Fonte />
          <div className="hidden mt-2 lg:mt-0 sm:flex justify-center ">
            <Download />
          </div>
        </div>
      </div>

      <div className="bg-[#112E45] w-[100%] sm:flex static bottom-0 ">
        <Footer />
      </div>
    </div>
    </Suspense>
  );
}


