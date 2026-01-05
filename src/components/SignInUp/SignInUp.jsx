import {useState} from 'react'
import style from './SignInUp.module.scss'
import { useNavigate } from 'react-router-dom' // malin

function SignInUp() {
    const [action, setAction] = useState("Sign Up")

   

    const [signUpMail, setSignUpMail] = useState("")
    const [signInMail, setSignInMail] = useState("")
    const [signUpPwd, setSignUpPwd] = useState("")
    const [signInPwd, setSignInPwd] = useState("")
    
    // adding navigation to character
    const navigate = useNavigate();

    const addStorage = () => {
        localStorage.setItem("email", signUpMail.trim())
        localStorage.setItem("pwd", signUpPwd)
        setSignUpMail("")
        setSignUpPwd("")
    }

    const signIn = () => {
        const userEmail = localStorage.getItem("email")
        const userPwd = localStorage.getItem("pwd")

        if (signInMail.trim() === userEmail && signInPwd === userPwd) {
            alert("You are Signed In !")
            navigate("/opponents") 
        } else {
            alert("Incorrect email or password..") 
        }
    }

    const switchMode = (mode) => {
        setAction(mode)
        setSignUpMail("")
        setSignInMail("")
        setSignUpPwd("")
        setSignInPwd("")
    }

    const isSignUp = action === "Sign Up"

    return (

        <div className={style.container}>
            <h1>{action}</h1>
        
            <form 
                className={style.container__input}
                onSubmit={(e) => {
                    e.preventDefault()
                    if (isSignUp)
                        addStorage()
                    else
                        signIn()
                }}
            >

            {isSignUp ? (
                <div className={style.email}>
                    <input
                        type="email"
                        placeholder="Email..."
                        value={signUpMail}
                        onChange={(e) => setSignUpMail(e.target.value)}
                        autoComplete='email'
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        placeholder="Choose a Password..."
                        value={signUpPwd}
                        onChange={(e) => setSignUpPwd(e.target.value)}
                        autoComplete='new-password'
                    />
                </div>
            ) : (
                <div className={style.email}>
                    <input
                        type="email"
                        placeholder="Email..."
                        value={signInMail}
                        onChange={(e) => setSignInMail(e.target.value)}
                        autoComplete='username'
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        placeholder="Your Password..."
                        value={signInPwd}
                        onChange={(e) => setSignInPwd(e.target.value)}
                        autoComplete='current-password'
                    />
                </div>
            )}
            
            <button type='submit'>Submit</button>
        </form>

            <div className={style.container__btn}>
                <button 
                    className={
                    action === "Sign In" ? style.white : style.submit}
                    type='button'
                    onClick={() => {
                    switchMode("Sign In")
                }}>
                    Sign In
                </button>

                <button 
                className={
                    action === "Sign Up" ? style.white : style.submit} 
                    type='button'
                    onClick={() => {
                    switchMode("Sign Up")
                }}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default SignInUp
