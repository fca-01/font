import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" bottom-0  flex justify-center items-center w-full h-52 text-white">
        {    <div className="text-center bg-[#071A2B] w-full h-full flex flex-col justify-center items-center">
                <div className="text-3xl" style={{fontFamily: 'Fontamento'}}>Free Fonts</div>
                <div className=" sm:flex items-center text-sm mt-5 gap-5">
                  <div>Desenvolvido por Fabricio C.</div>
                  <a href="https://github.com/fca-01" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-1 py-2">
                    <FaGithub />
                    <i>Github</i>
                  </a>
                  <a href="https://linkedin.com/in/fabriciosc" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-1">
                    <FaLinkedin />
                    <i>Linkedin</i>
                  </a>
                </div>
            </div>}
        </footer>
    )
}