import React from "react";
import logoImage from "../assets/images/nucleus-logo-white.svg";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#4a417b] bg-opacity-10 dark:bg-[#e6c5ac] dark:bg-opacity-10 px-5 py-2 rounded-xl rounded-t-none sticky top-0 z-50 backdrop-blur-md">
      <div className="navbar">
      <div className="flex-1">
        <a className="w-32 px-5 py-3 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 rounded-xl duration-500 cursor-pointer"><img id="logo" src={logoImage} alt="logo" fill="red" /></a>
      </div>
      <div className="flex-none">
        <ul className="flex text-md px-5 gap-x-4">
          <NavLink to="/" className={({isActive}) => isActive ? "px-3 py-1 bg-[#4a417b] dark:bg-[#e6c5ac] bg-opacity-15 dark:bg-opacity-10 dark:text-slate-50 rounded-lg duration-500 cursor-pointer" : "px-3 py-1 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 hover:dark:text-slate-50 rounded-lg duration-500 cursor-pointer"}>
            Home
          </NavLink>
          <NavLink to="/tasks" className={({isActive}) => isActive ? "px-3 py-1 bg-[#4a417b] dark:bg-[#e6c5ac] bg-opacity-15 dark:bg-opacity-10 dark:text-slate-50 rounded-lg duration-500 cursor-pointer" : "px-3 py-1 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 hover:dark:text-slate-50 rounded-lg duration-500 cursor-pointer"}>
            Tasks
          </NavLink>
          <NavLink to="/newtask" className={({isActive}) => isActive ? "px-3 py-1 bg-[#4a417b] dark:bg-[#e6c5ac] bg-opacity-15 dark:bg-opacity-10 dark:text-slate-50 rounded-lg duration-500 cursor-pointer" : "px-3 py-1 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 hover:dark:text-slate-50 rounded-lg duration-500 cursor-pointer"}>
            New Task
          </NavLink>
          <NavLink to="/settings" className={({isActive}) => isActive ? "px-3 py-1 bg-[#4a417b] dark:bg-[#e6c5ac] bg-opacity-15 dark:bg-opacity-10 dark:text-slate-50 rounded-lg duration-500 cursor-pointer" : "px-3 py-1 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 hover:dark:text-slate-50 rounded-lg duration-500 cursor-pointer"}>
            Settings
          </NavLink>
          <NavLink to="/stats" className={({isActive}) => isActive ? "px-3 py-1 bg-[#4a417b] dark:bg-[#e6c5ac] bg-opacity-15 dark:bg-opacity-10 dark:text-slate-50 rounded-lg duration-500 cursor-pointer" : "px-3 py-1 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 hover:dark:text-slate-50 rounded-lg duration-500 cursor-pointer"}>
            Stats
          </NavLink>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Header