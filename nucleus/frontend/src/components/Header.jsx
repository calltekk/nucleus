import React from "react";
import logoImage from "../assets/images/nucleus-logo-white.svg";
import { NavLink, Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";
import { Home, CircleCheckBig, PieChart, LogIn, LogOut, UserPlus } from "lucide-react";

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
					<Link to={"/"} className="w-32 px-5 py-3 hover:bg-[#4a417b] hover:dark:bg-[#e6c5ac] hover:bg-opacity-15 dark:hover:bg-opacity-10 rounded-xl duration-500 cursor-pointer">
						<img id="logo" src={logoImage} alt="logo" fill="red" />
					</Link>
				</div>
				<div className="flex-none">
					<ul className="flex text-md px-5 gap-x-4">
						{/* <NavLink to="/" className={({ isActive }) => isActive ? activeBtnClasses : btnClasses}>
							<Home size={15} className="inline me-2" /> Home
						</NavLink> */}
						<NavLink to="/tasks" className={({ isActive }) => isActive ? activeBtnClasses : btnClasses}>
							<CircleCheckBig size={15} className="inline me-2" /> Tasks
						</NavLink>
						<NavLink to="/stats" className={({ isActive }) => isActive ? `${activeBtnClasses} me-10` : `${btnClasses} me-10`}>
							<PieChart size={15} className="inline me-2" /> Stats
						</NavLink>
						{user && (
							<button onClick={handleClick} className={({ isActive }) => isActive ? activeBtnClasses : btnClasses}>
								<LogOut size={15} className="inline me-2" /> Log Out
							</button>
						)}
						{!user && (
							<>
								<NavLink to="/login" className={({ isActive }) => isActive ? `${activeBtnClasses} group` : `${btnClasses}  group bg-stone-500 bg-opacity-40`}>
									<LogIn size={15} className="inline me-2" /> Log In
								</NavLink>
								<NavLink to="/signup" className={({ isActive }) => isActive ? `${activeBtnClasses} group` : `${btnClasses}  group bg-stone-500 bg-opacity-40`}>
									<UserPlus size={15} className="inline me-2" /> Sign Up
								</NavLink>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
