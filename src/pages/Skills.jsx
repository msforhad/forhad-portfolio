import { useState } from "react"
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiPug } from "react-icons/si";
import { FaSass } from "react-icons/fa";
// tools
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



export const Skills=()=>{
    let [skillActive,setSkillActive]= useState(false)
    return(
        <div>
            <div className="lg:container mx-[10px] md:mx-[120px] lg:mx-auto grid grid-cols-1 lg:grid-cols-[45%45%] lg:gap-[10%] mt-[500px] md:mt-[170px] lg:my-[50px] lg:my-[100px]">
                <div className="mx-[10px] flex gap-[20px] relative lg:mt-[100px]">
                    <div className="flex flex-col gap-[30px] absolute top-[30px] left-[-15px] text-[.8rem] font-semibold color-secondary">
                        <p className="rotate-90">MY SKILLS</p>
                        <p className="border-1 w-0 h-[50px] ml-[29px]"></p>
                    </div>
                    <div className="relative left-[40px] mr-[70px] lg:mr-[0px]">
                        <div>
                            <p className="text-[1.3rem] md:text-[2rem] font-bold poppins color-primary">What My <br />Programming Skills Included?</p>
                            <p className="roboto text-justify color-secondary">I develop simple,intuitive and responsive user interface that helps users get thing done with less effort and time with those technologies</p>
                        </div>
                        <div className="relative md:left-[35%] lg:left-[0px]">
                            <div className="bg-secondary w-[200px] flex gap-[40px] justify-center py-[7px] rounded-full poppins font-semibold tracking-[1px] my-[30px] ">
                                <button onClick={()=>setSkillActive(!skillActive)} className={`z-2 ${skillActive? "text-black":"text-white"}`}>
                                Skills
                                </button>
                                <button onClick={()=>setSkillActive(!skillActive)} className={`z-2 ${skillActive?"text-white":"text-black"}`}>
                                Tools
                                </button>
                            </div>

                            <div className={`absolute active-bg ${skillActive?'active-bg-left':'active-bg-right'}`}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mr-[10px] ${skillActive?'hidden':' '}`}>
                    <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-[20px] justify-items-center">
                        <li className="text-[3.5rem] my-[20px] text-red-500 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <TiHtml5 />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-blue-500 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <FaCss3Alt />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-cyan-500 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <IoLogoJavascript />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-green-500 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <SiTypescript />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-pink-500 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <BiLogoJquery />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-cyan-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <FaBootstrap />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-blue-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <RiTailwindCssFill />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-red-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <FaReact />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-green-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <FaSass />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-pink-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <FaAngular />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-red-700 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <FaVuejs />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-blue-300 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <IoLogoFirebase />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-pink-700 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow">
                            <SiPug />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                    </ul>
                </div>

                <div className={`mr-[10px] ${skillActive?'':'hidden'}`}>
                    <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-[20px] justify-items-center">
                        <li className="text-[3.5rem] my-[20px] text-red-500 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <VscVscode />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-blue-500 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <FaJava />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-cyan-500 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                            <IoLogoJavascript />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-cyan-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                        <SiAdobeaudition />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-blue-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                        <BiLogoAdobe />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-red-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                        <SiAdobexd />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-green-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                        <SiAdobephotoshop />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-pink-900 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                        <FaAngular />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-red-700 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                        <FaGitAlt />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-blue-300 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                        <SiAdobelightroom />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                        <li className="text-[3.5rem] my-[20px] text-pink-700 tooltip bg-secondary p-[20px] rounded-[10px] drop-shadow-md">
                        <FaNpm />
                            <span className="text-[.7rem] toolTipText">Angular</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}