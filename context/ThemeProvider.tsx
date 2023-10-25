"use client"
import React,{ useEffect, useState,createContext,useContext } from "react"


interface ThemeContextType{
    mode:string,
    setMode:(mode:string)=>void
}

const ThemeContext=createContext<ThemeContextType | undefined>(undefined);



export function Themeprovider({children}:{children:React.ReactNode}){

    const [mode,setMode]=useState('');
    const handleThemeChange=()=>{
          if(mode==='dark'){
            setMode('light');
            document.documentElement.classList.add('light');
          }
          if(mode==='light'){
            setMode('dark');
            document.documentElement.classList.add('dark');
          }
    }

    useEffect(()=>{
     handleThemeChange();
    },[mode])

    return(
        <ThemeContext.Provider value={{mode,setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context=useContext(ThemeContext);
    if(context===undefined){
        throw new Error('usetheme must be enclosed inside root');
    }
    return context;
}