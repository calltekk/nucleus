import React from "react";
import logoImage from "../assets/images/nucleus-logo-white.svg";
import { NavLink, Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";
import { Home, CircleCheckBig, PieChart, LogIn, LogOut, UserPlus, BookOpenCheck } from "lucide-react";

function Header() {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	const handleClick = () => {
		logout();
	};

  const activeBtnClasses = "px-3 py-1 bg-[#4a417b] dark:bg-[#e6c5ac] bg-opacity-15 dark:bg-opacity-10 dark:text-slate-50 rounded-lg duration-500 cursor-pointer flex items-center";
  const btnClasses = "px-3 py-1 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 hover:dark:text-slate-50 rounded-lg duration-500 cursor-pointer flex items-center";

	return (
		<div className="bg-[#4a417b] bg-opacity-10 dark:bg-[#e6c5ac] dark:bg-opacity-10 px-5 py-2 rounded-xl rounded-t-none sticky top-0 z-50 backdrop-blur-md">
			<div className="navbar">
				<div className="flex-1">
					<Link to={"/"} className="w-20 lg:w-32 px-2 lg:px-5 py-3 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 rounded-xl duration-500 cursor-pointer">
						<img id="logo" src={logoImage} alt="logo" fill="red" />
					</Link>
				</div>
				<div className="flex-none">
					<ul className="flex text-md gap-x-2 lg:gap-x-4">
						{/* <NavLink to="/" className={({ isActive }) => isActive ? activeBtnClasses : btnClasses}>
							<Home size={15} className="inline lg:me-2" /> Home
						</NavLink> */}
						<NavLink to="/tasks" className={({ isActive }) => isActive ? activeBtnClasses : btnClasses}>
							<CircleCheckBig size={15} className="inline lg:me-2" />
							<span className="hidden lg:block">Tasks</span> 
						</NavLink>
						<NavLink to="/stats" className={({ isActive }) => isActive ? `${activeBtnClasses} me-4 lg:me-10` : `${btnClasses} me-4 lg:me-10`}>
							<PieChart size={15} className="inline lg:me-2" />
							<span className="hidden lg:block">Stats</span> 
						</NavLink>
						{user && (
							<button onClick={handleClick} className={({ isActive }) => isActive ? activeBtnClasses : btnClasses}>
								<LogOut size={15} className="inline lg:me-2" />
								<span className="hidden lg:block">Log Out</span>
							</button>
						)}
						{!user && (
							<>
								<NavLink to="/login" className={({ isActive }) => isActive ? `${activeBtnClasses} group` : `${btnClasses}  group bg-stone-500 bg-opacity-40`}>
									<LogIn size={15} className="inline lg:me-2" />
									<span className="hidden lg:block">Log In</span>
								</NavLink>
								<NavLink to="/signup" className={({ isActive }) => isActive ? `${activeBtnClasses} group` : `${btnClasses}  group bg-stone-500 bg-opacity-40`}>
									<UserPlus size={15} className="inline lg:me-2" />
									<span className="hidden lg:block">Sign Up</span>
								</NavLink>
							</>
						)}
						<label className="swap swap-rotate">
							{/* this hidden checkbox controls the state */}
							<input type="checkbox" className="theme-controller" value="light" />
							{/* sun icon */}
							<svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
							{/* moon icon */}
							<svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
						</label>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
