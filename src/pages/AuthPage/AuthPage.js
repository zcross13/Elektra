import SignUpForm from "../../services/SignUpForm/SignUpForm"
import LoginForm from "../../services/LoginForm/LoginForm"

export default function AuthPage(){
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUpForm/>
            <LoginForm/>
        </main>
    )
}