import { useState } from 'react';
import { MdKeyboardReturn } from 'react-icons/md'
import './login.css'
import handleChange from '../../utilities/handleChange';

export default function RegisterForm(props) {
    const { regFormWindow, reg } = props

    const [registerData, setregisterData] = useState({
        username:"",
        password:"",
        confirmpw:"",
        firstname: "",
        surname:""
})
    const [errors, setErrors] = useState({
        usererror: "",
        pwerror: "",
        pwmatcherror: "",
        created: ""
    })
    const validate = () => {
        if(registerData.username.length<=3) {
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

        if(registerData.password.length<=3) {
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

        if(registerData.password !== registerData.confirmpw) {
            setErrors(prevErrors => ({
                ...prevErrors,
                pwmatcherror: 'Password do not match'
            }))
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                pwmatcherror: ''
            }))
        }
        if(registerData.password.length>=3 && registerData.username.length>=3 && registerData.password === registerData.confirmpw) {
            setErrors(prevErrors => ({
                ...prevErrors,
                created: 'You have successfully created an account!'
            }))
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                created: ''
            }))
        }
    }
    const errorStyle = {
        color: 'red'
    }
    const submitHandler = (e) => {
        e.preventDefault();
        validate();
        return;
    }
    
    return(
        <>
            <div className={regFormWindow ? 'regform active' : 'regform'}>
                <div className='reg_content'>
                    <form id='reg' onSubmit={submitHandler}>
                        <button onClick={reg}><MdKeyboardReturn />Return</button>
                        <br></br>
                        <label>First Name:</label>
                        <input type="text" name='firstname' value={registerData.firstname} onChange={(e) => handleChange(e, setregisterData)}/>
                        <label>Last Name:</label>
                        <input type="text" name='surname' value={registerData.surname} onChange={(e) => handleChange(e, setregisterData)}/>
                        <label>Username:</label>
                        <input type="text" name='username' value={registerData.username} onChange={(e) => handleChange(e, setregisterData)}/>
                        <div style={errorStyle}>{errors.usererror}</div>
                        <label>Password:</label>
                        <input type="password" name='password' value={registerData.password} onChange={(e) => handleChange(e, setregisterData)}/>
                        <div style={errorStyle}>{errors.pwerror}</div>
                        <label>Confirm Password:</label>
                        <input type="password" name='confirmpw' value={registerData.confirmpw} onChange={(e) => handleChange(e, setregisterData)}/>
                        <div style={errorStyle}>{errors.pwmatcherror}</div>
                        <input type="submit" />
                        <div style={{color:'green'}}>{errors.created}</div>
                    </form>
                </div>
            </div>
        </>
    )
}