import React from "react";
import logoImage from "../assets/images/nucleus-logo-white.svg";

function Header() {
  return (
    <div className="bg-slate-50 bg-opacity-5 px-5 py-2 rounded-xl rounded-t-none sticky top-0 z-50 backdrop-blur-md">
        <div className="navbar">
        <div className="flex-1">
            <a className="w-32 px-5 py-3 dark:hover:bg-slate-50 hover:bg-stone-900 dark:hover:bg-opacity-5 hover:bg-opacity-5 rounded-xl duration-500 cursor-pointer"><img id="logo" src={logoImage} alt="logo" fill="red" /></a>
        </div>
        <div className="flex-none">
            <ul className="flex text-md px-5 gap-x-4">
                <li><a className="px-5 py-3 dark:hover:bg-slate-50 hover:bg-stone-900 dark:hover:bg-opacity-5 hover:bg-opacity-5 rounded-lg duration-500 cursor-pointer">Settings</a></li> 
                <li><a className="px-5 py-3 dark:hover:bg-slate-50 hover:bg-stone-900 dark:hover:bg-opacity-5 hover:bg-opacity-5 rounded-lg duration-500 cursor-pointer">Stats</a></li> 
            </ul>
        </div>
    </div>
  </div>
  )
}

export default Header