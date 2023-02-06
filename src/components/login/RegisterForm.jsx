import { MdKeyboardReturn } from 'react-icons/md'
import './login.css'

export default function RegisterForm(props) {
    const { regFormWindow, reg } = props
    const submitHandler = (e) => {
        e.preventDefault();
        return;
    }
    
    return(
        <>
            <div className={regFormWindow ? 'regform active' : 'regform'}>
                <div>
                    <form onSubmit={submitHandler}>
                        <button onClick={reg}><MdKeyboardReturn />Return</button>
                        <label>First Name:</label>
                        <input type="text" name='' value=''/>
                        <label>Last Name:</label>
                        <input type="text" name='' value=''/>
                        <label>Username:</label>
                        <input type="text" name='' value=''/>
                        <label>Password:</label>
                        <input type="password" name='' value=''/>
                        <label>Confirm Password:</label>
                        <input type="password" name='' value=''/>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}