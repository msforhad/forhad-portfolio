
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { BiLogoAdobe } from "react-icons/bi";
import { SiAdobeaudition } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";
export const Portfolio=()=>{
    return(
        <div>
            <div className="lg:container mx-auto my-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mx-[40px] md:mx-[10px]">
                    <div className="h-[700px] lg:h-[900px] grid grid-flow-row grid-rows-14 gap-[20px]">
                        <div className="row-span-5">
                            <div className=" relative color-secondary">
                                <p className="rotate-270 absolute top-[40px] left-[-30px] poppins font-semibold text-gray-500">My Work</p>
                                <p className="border-1 w-[50px] rotate-90 absolute top-[115px] left-[-20px]"></p>
                            </div>
                            <div className=" ml-[25px] text-wrap mt-[10px]">
                                <p className="text-[1.5rem] lg:text-[2rem] font-bold poppins color-primary">See My Works Which Will Amaze You!</p>
                                <p className="roboto text-justify text-[1rem] mt-[20px] color-secondary">I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
                            </div>
                        </div>
                        <div className="row-span-5 bg-cyan-500 rounded-[6px] drop-shadow-lg"></div>
                        <div className="row-span-4 bg-amber-500 rounded-[6px] drop-shadow-lg"></div>
                    </div>
                    <div className="h-[750px] lg:h-[950px] grid grid-flow-row grid-rows-15 gap-[20px]">
                        <div className="row-span-4 bg-purple-500 rounded-[6px] drop-shadow-lg"></div>
                        <div className="row-span-7 bg-teal-500 rounded-[6px] drop-shadow-lg"></div>
                        <div className="row-span-4 bg-stone-500 rounded-[6px] drop-shadow-lg"></div>
                    </div>
                    <div className="grid h-[550px] lg:h-[750px] grid-flow-row gird-rows-13 gap-[20px]">
                        <div className="row-span-7 bg-slate-500 rounded-[6px] drop-shadow-lg">
                        
                        </div>
                        <div className="row-span-5 bg-zinc-500 rounded-[6px] drop-shadow-lg">
                    
                            <p>My name is forhad</p>
                        </div>
                        <div className=" text-center">
                            <button className="underline font-semibold text-blue-500 italic">Load more work</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};