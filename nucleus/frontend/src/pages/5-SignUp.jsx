import { useState } from "react";
import {useSignup} from '../hooks/useSignUp';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(name, email, password);
        // console.log(email, password)
    }

  	return (
		<div className="h-dvh w-full">
            <form id="signup" className="form w-full" onSubmit={handleSubmit}>
                <h1 className="form-title">Sign Up</h1>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Name"
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                />
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
                <button className="submit-button" disabled={isLoading}>Sign Up</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
  	)
};

export default SignUp;