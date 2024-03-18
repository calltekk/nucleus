import React from 'react'
import logoImage from '../assets/images/nucleus-logo-white.svg'

function Header() {
  return (
    <div className="">
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost w-32"><img id="logo" src={logoImage} alt="logo" fill="red" /></a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>Settings</a></li> 
                <li><a>Stats</a></li> 
            </ul>
        </div>
    </div>
  </div>
  )
}

export default Header