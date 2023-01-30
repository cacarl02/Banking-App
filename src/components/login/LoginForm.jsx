import { useState } from "react";
import handleChange from "../../utilities/handleChange";

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
                username:"",
                password:""
    })

    const loginHandler = (e) => {
        e.preventDefault();


    }
    return (
        <form className="form" onSubmit={loginHandler}>
            <h3>Username:</h3>
            <input 
				type="text"
				name="username"
				autoComplete="off"
                className="login-input"
                value={loginData.username}
                onChange={(e) => handleChange(e, setLoginData)}
            />
            <h3>Password:</h3>
            <input 
				type="password"
				name="password"
                className="login-input"
                value={loginData.password}
                onChange={(e) => handleChange(e, setLoginData)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;