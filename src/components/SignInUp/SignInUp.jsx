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
    const getUsers = () => {
        const rawInput = localStorage.getItem("users")
        return rawInput ? JSON.parse(rawInput) : []
    }

    const signIn = () => {
        const users = getUsers();
        const email = signInMail.trim()
        const pwd = signInPwd

        if (!email || !pwd) {
            alert("Please enter email and password.")
            return
        }

        const match = users.find(
            u => u.email === email && u.pwd === pwd
        );

        if (!match) {
            alert("Wrong email or password");
            return;
        }

        localStorage.setItem("currentUser", match.email);
        setSignInMail("");
        setSignInPwd("");
        navigate("/opponents");
        };


    const signUp = () => {
        const users = getUsers();
        const email = signUpMail.trim();
        const pwd = signUpPwd;

        if (!email || !pwd) {
        alert("Please enter email and password.");
        return;
        }

        if (users.some((u) => u.email === email)) {
        alert("You already have an account! Please Sign In.");
        return;
        }

        users.push({ email, pwd });

        localStorage.setItem("users", JSON.stringify(users));

        setSignUpMail("");
        setSignUpPwd("");

        const startGame = confirm(
        "You are now Signed Up! Would you like to start the game?"
        );
        if (startGame) {
        localStorage.setItem("currentUser", email);
        navigate("/opponents");
        }
    };

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
                        signUp()
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
