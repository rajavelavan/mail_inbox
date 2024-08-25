'use client'
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
    const [darkMode, setDarkMode]= useState(false);

    useEffect(()=> {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])
    return(
        <div className="relative w-16 h-8 flex items-center bg-[#E9EAEC] dark:bg-[#222428] shadow cursor-pointer rounded-full size-4" onClick={()=> setDarkMode(!darkMode)}>
            <BsSunFill className=" text-yellow-400 ml-1" size={20}/>
            <div className= "absolute bg-transparent bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style ={darkMode ? {left: '2px'} : {right: '2px'}}/>
            <FaMoon className= "ml-4 text-yellow-400" size={15}/>
        </div>
    );
};

export default ThemeToggle;