import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { LiaBuromobelexperte } from "react-icons/lia";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { About } from "./About";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";



export const Home = () =>{
    return(
        <section>
            <div className="lg:container mx-auto grid md:grid-cols-6 mt-[40px] z-9">
                <div className="content-center md:block hidden ml-[10px]">
                    <ul className="flex flex-col gap-3 color-secondary">
                        <li className="text-[1.3rem]"><FaFacebook /></li>
                        <li className="text-[1.3rem]"><IoLogoWhatsapp /></li>
                        <li className="text-[1.3rem]"><FaLinkedin /></li>
                        <li className="border-1 w-0 ml-[8px] h-[40px]"></li>
                    </ul>
                </div>
                <div className="col-span-4 justify-items-center md:relative">
                    <img className="w-[70vh]" src="../../public/logo-2xl.png" alt="" />
                    <div className="md:absolute md:bottom-[30px] lg:bottom-[50px] xl:bottom-[60px] 2xl:bottom-[110px] md:left-[130px] lg:left-[180px] xl:left-[250px] 2xl:left-[190px] justify-items-center mt-[40px]">
                        <p className="text-black md:text-white font-black text-[2rem] md:text-[1.6rem] lg:text-[2.1rem] xl:text-[2.4rem] 2xl:text-[4.6rem] poppins tracking-[1px]">We Design & Build <br /> Creative Products</p>
                        <button className="border-1 border-black md:border-white text-black md:text-white rounded-[4px] poppins font-semibold p-[5px] hover:bg-black md:hover:bg-white hover:text-white md:hover:text-black md:text-[.7rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[2.2rem] mt-[10px] md:mt-[0px]"><NavLink to="/Contact">GET IN TOUCH</NavLink></button>
                    </div>
                </div>
                <div className="content-center md:block hidden">
                    <ul className="flex flex-col gap-[20px] items-end color-secondary">
                        <li className="rotate-90 saira-stencil tracking-[10px]"><p className="mb-[80px]">FORHAD</p></li>
                        <li><p className=" border-1 h-[40px] mr-[22px]"></p></li>
                    </ul> 
                </div>

            </div>
{/*------------------- card-section--------------- */}
            <div className="md:container mx-auto my-[50px] md:my-[150px] ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-[10px]">
                    <div className="bg-secondary rounded-[5px] p-[20px] xl:p-[30px] shadow-md hover:scale-101">
                        <ul className="flex justify-between gap-[10px] items-center">
                            <li className="text-[2.5rem] md:text-[3rem] text-orange-500"><LiaBuromobelexperte /></li>
                            <li className="text-[1.5rem] md:text-[2rem] font-black text-orange-500 poppins text-center">12+ <br /><span className="text-black text-[.8rem] xl:text-[1rem] font-bold poppins color-primary">Years of Experience</span></li>
                            <li className="text-[1.5rem] md:text-[2rem] color-secondary"><IoIosArrowForward /></li>
                        </ul>
                    </div>

                    <div className="bg-secondary rounded-[5px] p-[20px] md:p-[30px] shadow-md hover:scale-101">
                        <ul className="flex justify-between gap-[10px] items-center">
                            <li className="text-[2.5rem] md:text-[3rem] text-orange-500"><MdPlaylistAddCheckCircle /></li>
                            <li className="text-[1.5rem] md:text-[2rem] font-black text-orange-500 poppins text-center">230+<br /><span  className="text-black text-[.8rem] xl:text-[1rem] font-bold poppins color-primary">Completed Projects</span></li>
                            <li className="text-[1.5rem] md:text-[2rem] color-secondary"><IoIosArrowForward /></li>
                        </ul>
                    </div>

                    <div className="bg-secondary rounded-[5px] p-[20px] md:p-[30px] shadow-md hover:scale-101">
                        <ul className="flex justify-between gap-[10px] items-center">
                            <li className="text-[2.5rem] md:text-[3rem] text-orange-500"><FaPersonCirclePlus /></li>
                            <li className="text-[1.5rem] md:text-[2rem] font-black text-orange-500 poppins text-center">95+ <br /><span  className="text-black text-[.8rem] xl:text-[1rem] font-bold poppins color-primary">Happy Client</span></li>
                            <li className="text-[1.5rem] md:text-[2rem] color-secondary"><IoIosArrowForward /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
            
        </section>

    )
};