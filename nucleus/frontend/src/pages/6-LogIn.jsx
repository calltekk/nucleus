import { useState } from "react";
import { useLogin } from '../hooks/useLogIn'

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }

  	return (
		<div className="w-full">
            <form id="login" className="flex flex-col justify-center items-center w-full px-10 py-10" onSubmit={handleSubmit}>
                <h1 className="text-3xl mb-3">Log In</h1>
                 <input
                    className="max-w-[600px] my-3 rounded-xl px-10 py-4 hover:bg-[#4a417b] border-2 border-[#4a417b] dark:border-[#e6c5ac] dark:hover:bg-[#e6c5ac] dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 duration-500 bg-transparent hover:bg-opacity-50 dark:hover:bg-opacity-50"
                    type="email"
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                />
                 <input
                    className="max-w-[600px] my-3 rounded-xl px-10 py-4 hover:bg-[#4a417b] border-2 border-[#4a417b] dark:border-[#e6c5ac] dark:hover:bg-[#e6c5ac] dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 duration-500 bg-transparent hover:bg-opacity-50 dark:hover:bg-opacity-50"
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                />
                <button className="max-w-[600px] my-6 rounded-xl px-10 py-3 hover:bg-[#4a417b] border-2 border-[#4a417b] dark:border-[#e6c5ac] dark:hover:bg-[#e6c5ac] dark:text-slate-50 hover:text-slate-50 dark:hover:text-slate-800 duration-500" disabled={isLoading}>Log In</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
  	)
};

export default LogIn;