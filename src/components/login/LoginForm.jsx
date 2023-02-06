import { useState } from "react";
import handleChange from "../../utilities/handleChange";

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
                username:"",
                password:""
    })
    const [errors, setErrors] = useState({
        usererror: "",
        pwerror: ""
    })
    const validate = () => {
        if(loginData.username.length<=3) {
            setErrors(prevErrors => ({
                ...prevErrors,
                usererror: 'Minimum of 4 characters'
            }))
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                usererror: ''
            }))
        }

        if(loginData.password.length<=3) {
            setErrors(prevErrors => ({
                ...prevErrors,
                pwerror: 'Minimum of 4 characters'
            }))
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                pwerror: ''
            }))
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        validate()
        
    }
    const errorStyle = {
        color: 'red'
    }
    return (
        <form className="login_content" onSubmit={submitHandler}>
            <div>
                <h1>The Bank</h1>
                <h2>Login</h2>
            </div>
            <h3>Username:</h3>
            <input 
				type="text"
				name="username"
				autoComplete="off"
                className="login-input"
                value={loginData.username}
                onChange={(e) => handleChange(e, setLoginData)}
            />
            <div style={errorStyle}>{errors.usererror}</div>
            <h3>Password:</h3>
            <input 
				type="password"
				name="password"
                className="login-input"
                value={loginData.password}
                onChange={(e) => handleChange(e, setLoginData)}
            />
            <div style={errorStyle}>{errors.pwerror}</div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;