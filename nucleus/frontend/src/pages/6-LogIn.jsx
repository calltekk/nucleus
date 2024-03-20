import { useState } from "react";
import Header from "../components/Header";
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
		<div className="h-dvh">
            <form id="login" className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">Log In</h1>
                 <input
                    className="input-field"
                    type="email"
                    placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                />
                 <input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                />
                <button className="submit-button" disabled={isLoading}>Log In</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
  	)
};

export default LogIn;