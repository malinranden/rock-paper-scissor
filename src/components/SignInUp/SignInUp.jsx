import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './SignInUp.module.scss'

function SignInUp() {
  /***
  Mode + form state
  ***/
  const [action, setAction] = useState("Sign Up")

  const [signUpMail, setSignUpMail] = useState("")
  const [signInMail, setSignInMail] = useState("")
  const [signUpPwd, setSignUpPwd] = useState("")
  const [signInPwd, setSignInPwd] = useState("")

  const navigate = useNavigate()

  /***
    Helper
  ***/
  const getUsers = () => {
    const rawInput = localStorage.getItem("users")
    return rawInput ? JSON.parse(rawInput) : []
  }

  /***
  Actions
  ***/
  const signIn = () => {
    const users = getUsers()
    const email = signInMail.trim()
    const pwd = signInPwd

    if (!email || !pwd) {
      alert("Please enter email and password.")
      return
    }

    const match = users.find(u => u.email === email && u.pwd === pwd)

    if (!match) {
      alert("Wrong email or password")
      return
    }

    localStorage.setItem("currentUser", match.email)
    setSignInMail("")
    setSignInPwd("")
    navigate("/opponents")
  }

  const signUp = () => {
    const users = getUsers()
    const email = signUpMail.trim()
    const pwd = signUpPwd

    if (!email || !pwd) {
      alert("Please enter email and password.")
      return
    }

    if (users.some(u => u.email === email)) {
      alert("You already have an account! Please Sign In.")
      return
    }

    users.push({ email, pwd })
    localStorage.setItem("users", JSON.stringify(users))

    setSignUpMail("")
    setSignUpPwd("")

    const startGame = confirm("You are now Signed Up! Would you like to start the game?")
    if (startGame) {
      localStorage.setItem("currentUser", email)
      navigate("/opponents")
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
    <div className={`${style.card} ${style.signin}`}>

      <div className={style["grid-title"]}>
        <h1 className={style["grid-title--h1"]}>{action}</h1>
      </div>

      <div className={style.formArea}>
        <form
          className={style.container__input}
          onSubmit={(e) => {
            e.preventDefault()
            if (isSignUp) signUp()
            else signIn()
          }}
        >
          {isSignUp ? (
            <div className={style["input-sUp"]}>
              <input
                type="email"
                placeholder="Email..."
                value={signUpMail}
                onChange={(e) => setSignUpMail(e.target.value)}
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Choose a Password..."
                value={signUpPwd}
                onChange={(e) => setSignUpPwd(e.target.value)}
                autoComplete="new-password"
              />
            </div>
          ) : (
            <div className={style["input-sIn"]}>
              <input
                type="email"
                placeholder="Email..."
                value={signInMail}
                onChange={(e) => setSignInMail(e.target.value)}
                autoComplete="username"
              />
              <input
                type="password"
                placeholder="Your Password..."
                value={signInPwd}
                onChange={(e) => setSignInPwd(e.target.value)}
                autoComplete="current-password"
              />
            </div>
          )}

          <button type="submit" className={style.submit}>
            Submit
          </button>
        </form>
      </div>

      <div className={style.container__btn}>
        <div>
          <button
            type="button"
            className={`${style.toggleBtn} ${action === "Sign In" ? style["toggleBtn--active"] : ""}`}
            onClick={() => switchMode("Sign In")}
          >
            Sign In
          </button>

          <button
            type="button"
            className={`${style.toggleBtn} ${action === "Sign Up" ? style["toggleBtn--active"] : ""}`}
            onClick={() => switchMode("Sign Up")}
          >
            Sign Up
          </button>
        </div>
      </div>

    </div>
  )
}

export default SignInUp
