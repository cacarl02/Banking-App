import { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";


const LoginPage = () => {
    const [regFormWindow, setregFormWindow] = useState(false)
    const reg = () => {
        setregFormWindow(!regFormWindow)
    }
    return (
        <main>
            <LoginForm />
            <div>
                <p>No account yet?</p>
                <button onClick={reg}>Register Now!</button>
            </div>
            <RegisterForm reg={reg} regFormWindow={regFormWindow} />
        </main>
    )
}

export default LoginPage;