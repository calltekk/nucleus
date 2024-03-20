import React from 'react'
import logoImage from '../assets/images/nucleus-logo-white.svg';
import { NavLink, Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogOut';
import { useAuthContext } from '../hooks/useAuthContext';

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="">
        <div className="navbar bg-base-100">
        <div className="flex-1">
        <Link to="/"><span className="btn btn-ghost w-32"><img id="logo" src={logoImage} alt="logo" fill="red" /></span></Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>Settings</a></li> 
                {user && (
                    <>
                      <li><a>Stats</a></li>
                      <li><button onClick={handleClick}>Log Out</button></li>
                    </>
                )}
                
                {!user && (
                  <>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                  </>
                )}
                
            </ul>
        </div>
    </div>
  </div>
  )
}

export default Header