export const About =()=>{
    return(
        <div>
            <div className="mx-[10px] my-[40px] lg:container mx-auto grid grid-cols-1 md:grid-cols-[40%55%] gap-[20px] ">
                <div className=" w-[90%] mx-auto">
                    <img className="lg:w-[100%] xl:w-[80%]" src="../../public/logo-2xl.png" alt="" />
                </div>

                <div className="flex gap-[10px] relative mb-[20px] mx-[10px]">
                    <div className="absolute left-[-25px] top-[40px]">
                        <ul className="flex flex-col gap-[35px] color-secondary">
                            <li className="rotate-90 tracking-[2px]poppins font-semibold"><p>ABOUT ME</p></li>
                            <li className="ml-[40px]"><p className="border-1 w-0 h-[70px]"></p></li>
                        </ul>
                    </div>

                    <div className="absolute left-[40px]">
                        <div>
                            <p className="text-[1.2rem] sm:text-[1.7rem] font-bold poppins color-primary">Need a Creative <br />Product? I can Help You!</p>
                            <p className="text-justify my-[10px] color-secondary">HI! I'm <span className="text-orange-500 font-bold">Md.Mehedi Hasan Forhad</span>, and I'm a developer who has passion for building clean web application with intuitive functionalities.I enjoy the process of turing ideas into reality using creative solutions.I'm always curious about learning new skills,tools,and concepts.In additions to working on various solo full stack projects,I have worked with creative teams,which involves daily stand-ups and communications,source control, and project management.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[20px] poppins font-semibold tracking-[1px] my-[20px] sm:my-[40px] text-[.8rem] sm:text-[1rem]">
                            <button className="border-1 border-orange-500 py-[8px] px-[15px] rounded-[4px] bg-orange-500 text-white hover:bg-orange-400">HIRE ME</button>
                            <button className="border-1 border-sky-500 py-[8px] px-[15px] rounded-[4px] hover:bg-cyan-500 text-slate-600 bg-white">DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};