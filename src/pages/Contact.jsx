import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export const Contact=()=>{
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b953c16-0077-4718-9e60-ee70463222c5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return(
        <div className="container mx-auto">
            <div className="mx-[50px] md:mx-[10px] grid grid-cols-1 md:grid-cols-[45%48%] lg:grid-cols-[55%38%] gap-[7%] mb-[100px] md:my-[40px]">
                <div className="flex gap-[10px]">
                    <div className="color-secondary font-semibold absolute">
                        <p className="rotate-270 relative top-[35px] left-[-25px] poppins">Contact</p>
                        <p className="border-1 relative left-[8px] top-[60px]  h-[60px] w-[0px]"></p>
        
                    </div>
                    <div className="relative left-[30px]">
                        <div>
                            <p className="color-primary text-[1.5rem] lg:text-[2rem] font-bold poppins">Have You Any Project?<br /> Please Drop a Message</p>
                            <p className="color-secondary text-justify my-[30px] roboto">Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.</p>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <div>
                                <div className="flex gap-[15px]">
                                    <FaLocationDot className="text-[1.5rem] color-primary" />
                                    <p className="color-primary font-bold poppins text-[1.1rem]">Address:</p>
                                </div>
                                    <p className="color-secondary ml-[40px] text-justify">941 Saqrqorish Road, alandalos, grnata, wa 47122-4194</p>
                            </div>
                            <div>
                                <div className="flex gap-[15px]">
                                    <FaPhoneAlt className="text-[1.5rem] color-primary" />
                                    <p className="color-primary font-bold poppins text-[1.1rem]">Phone:</p>
                                </div>
                                <p className="color-secondary ml-[40px] text-justify">01793395006 <br />01619535961</p>
                            </div>
                            <div>
                                <div className="flex gap-[15px]">
                                    <MdEmail className="text-[1.5rem] color-primary" />
                                    <p className="color-primary font-bold poppins text-[1.1rem]">Email:</p>
                                </div>
                                <p className="color-secondary ml-[40px] text-justify">mdx158631@gmail.com <br />mdforhad717@gmail.com</p>
                            </div>
                            <div>
                                <ul className="flex gap-[30px]">
                                    <li className="tooltip">
                                        <a className="color-primary text-[3rem] drop-shadow-md" href=""><FaFacebook className="bg-secondary p-[10px] rounded-full" /></a>
                                        <span className="text-[.7rem] toolTipText">Facebook</span>
                                    </li>
                                    <li className="tooltip">
                                        <a className="color-primary text-[3rem] drop-shadow-md" href=""><FaYoutube className="bg-secondary p-[10px] rounded-full" /></a>
                                        <span className="text-[.7rem] toolTipText">YouTube</span>
                                    </li>
                                    <li className="tooltip">
                                        <a className="color-primary text-[3rem] drop-shadow-md" href=""><FaLinkedin className="bg-secondary p-[10px] rounded-full" /></a>
                                        <span className="text-[.7rem] toolTipText">Linkedin</span>
                                    </li>
                                    <li className="tooltip">
                                        <a className="color-primary text-[3rem] drop-shadow-md" href=""><FaTwitter className="bg-secondary p-[10px] rounded-full" /></a>
                                        <span className="text-[.7rem] toolTipText">Twitter</span>
                                    </li>
                                </ul>
                                
                                

                            </div>
                        </div>
                        

                    </div>

                </div>
                <div className="bg-secondary py-[50px] px-[30px] rounded-[6px]">
                    <form onSubmit={onSubmit} className="flex flex-col gap-[50px] mb-[20px]">
                        <div className="input-box flex flex-col relative">
                            <label className="absolute top-[-25px] color-primary poppins font-semibold">Name</label>
                            <input type="text" className="field border-b-[2px] border-blue-500 rounded-[6px] px-[30px] py-[5px] bg-primary outline-none color-primary roboto" placeholder="e.g Forhad" name="name" required />
                            <CgProfile  className="absolute top-[10px] left-[8px] color-secondary"/>
                        </div>
                        <div className="input-box flex flex-col relative">
                            <label className="absolute top-[-25px] color-primary poppins font-semibold">Email</label>
                            <input type="email" className="field border-b-[2px] border-blue-500 rounded-[6px] px-[30px] py-[5px] bg-primary outline-none color-primary roboto" placeholder="e.g mdx158631@gmail.com" name="email" required />
                            <MdEmail className="absolute top-[10px] left-[8px] color-secondary"></MdEmail>
                        </div>
                        <div className="input-box flex flex-col relative">
                            <label className="absolute top-[-25px] color-primary poppins font-semibold">Phone</label>
                            <input type="text" className="field border-b-[2px] border-blue-500 rounded-[6px] px-[30px] py-[5px] bg-primary outline-none color-primary roboto" placeholder="Phone Number" name="phone" required />
                            <FaPhoneAlt className="absolute top-[10px] left-[8px] color-secondary" />
                        </div>
                        <div className="input-box flex flex-col relative">
                            <label className="absolute top-[-25px] color-primary poppins font-semibold">Message</label>
                            <textarea name="message" className="field mess border-b-[2px] border-blue-500 rounded-[6px] px-[30px] py-[5px] bg-primary outline-none color-primary roboto" placeholder="Enter your message" required cols="30"></textarea>
                            <MdMessage className="absolute top-[10px] left-[8px] color-secondary" />
                        </div>
                        <button type="submit" className="bg-orange-500 rounded-[4px] p-[5px] courser-pointer text-white font-bold poppins tracking-[2px]">Send</button>
                    </form>
                    <div className="text-center">
                        <span className=" my-[40px] text-center p-[10px] poppins font-semibold color-primary ">{result}</span>

                    </div>
                    
                </div>
            </div>
        </div>
        
       
    )
}


// export default function Contact() {
//     const [result, setResult] = React.useState("");
  
//     const onSubmit = async (event) => {
//       event.preventDefault();
//       setResult("Sending....");
//       const formData = new FormData(event.target);
  
//       formData.append("access_key", "7b953c16-0077-4718-9e60-ee70463222c5");
  
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     };
  
//     return (
//       <div>
//         <form onSubmit={onSubmit}>
//           <input type="text" name="name" required/>
//           <input type="email" name="email" required/>
//           <textarea name="message" required></textarea>
  
//           <button type="submit">Submit Form</button>
  
//         </form>
//         <span>{result}</span>
  
//       </div>
//     );
//   }