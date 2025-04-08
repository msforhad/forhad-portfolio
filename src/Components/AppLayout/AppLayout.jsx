import { Outlet } from "react-router-dom"
import { Header } from "../UI/Header"
import { Footer } from "../UI/Footer"
import { useState } from "react"



export const AppLayout= () =>{
    let [mode,setMode]=useState(false)
    return(
        <div className={`bg-primary ${mode? "dark-mode":"light-mode"}`}>
        <Header setMode={setMode} mode={mode}></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    )
}