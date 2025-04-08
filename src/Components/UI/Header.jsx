import { NavLink } from "react-router-dom"
import { RiMenu5Fill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { useState} from 'react';



export const Header = (props) =>{
    let [toggleBtn,setToggleBtn]=useState(false)
    return(
        <>
        <header className="py-4 roboto sticky top-0 bg-secondary z-10">
            <div className="md:container mx-auto grid md:grid-cols-5 grid-cols-2">
                <div className="ml-[10px]">
                    <NavLink to="/" className="saira-stencil text-[1.5rem] color-primary">Forhad<span className="text-orange-500">.</span></NavLink>
                </div>
                <div className="md:col-span-3 mt-[5px] md:block hidden justify-items-center">
                    <ul className="flex gap-[25px] poppins font-semibold">
                        <li className="hover:line-through decoration-2 decoration-orange-500  color-primary"><NavLink to="/">Home</NavLink></li>
                        <li  className="hover:line-through decoration-2 decoration-orange-500 color-primary "><NavLink to="/About">About</NavLink></li>
                        <li  className="hover:line-through decoration-2 decoration-orange-500 color-primary "><NavLink to="/Skills">Skills</NavLink></li>
                        <li  className="hover:line-through decoration-2 decoration-orange-500 color-primary "><NavLink to="/Portfolio">Portfolio</NavLink></li>
                        <li  className="hover:line-through decoration-2 decoration-orange-500 color-primary "><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="flex gap-3 justify-end mr-[15px] md:mr-[0px]">
                    <select name="" id="" className="hover:outline outline-sky-500 h-[30px] mt-[3px] rounded-[4px] color-primary">
                        <option className="color-primary bg-primary" value="">English</option>
                        <option className="color-primary bg-primary" value="">Bangla</option>
                    </select>
                    <button onClick={()=>{props.setMode(!props.mode)}} className="text-[1.5rem] mr-[50px] md:mr-[10px] color-primary"><MdDarkMode /></button>
                    <button onClick={()=>setToggleBtn(!toggleBtn)} className="text-[1.5rem] md:hidden block menu z-1 color-primary">
                        {
                            toggleBtn?<span className="absolute top-[-20px] left-[-20px] text-[2.5rem] ">&times;</span>:<RiMenu5Fill />
                        }   
                    </button>
                    <div className={`menuBar ${toggleBtn? 'activeMenuBar':''}`}>
                        <ul className="flex flex-col gap-[25px] poppins font-bold text-[1.5rem] mt-[50px] color-primary">
                            <li onClick={()=>setToggleBtn(!toggleBtn)} className="hover:line-through decoration-2 decoration-orange-500 "><NavLink to="/">Home</NavLink></li>
                            <li onClick={()=>setToggleBtn(!toggleBtn)}  className="hover:line-through decoration-2 decoration-orange-500 "><NavLink to="/About">About</NavLink></li>
                            <li onClick={()=>setToggleBtn(!toggleBtn)}  className="hover:line-through decoration-2 decoration-orange-500 "><NavLink to="/Skills">Skills</NavLink></li>
                            <li onClick={()=>setToggleBtn(!toggleBtn)}  className="hover:line-through decoration-2 decoration-orange-500 "><NavLink to="/Portfolio">Portfolio</NavLink></li>
                            <li onClick={()=>setToggleBtn(!toggleBtn)}  className="hover:line-through decoration-2 decoration-orange-500 "><NavLink to="/Contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
        </>
    )
}
