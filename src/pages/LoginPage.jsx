import LoginForm from "../components/login/LoginForm";


const LoginPage = () => {
    return (
        <main>
            <div>
                <h1>The Bank</h1>
                <h2>Login</h2>
            </div>
            <LoginForm />
            <div>
                <p>No account yet?</p>
                <button>Register Now!</button>
            </div>
        </main>
    )
}

export default LoginPage;