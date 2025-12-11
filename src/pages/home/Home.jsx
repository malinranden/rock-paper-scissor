import style from './Home.module.css'
import SignInUp from '../../components/SignInUp/SignInUp';
import Intro from '../../components/Intro/Intro.jsx'

function Home () {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                width: "100%",
            }}>
            <Intro />
            <SignInUp />
        </div>
        </>
    )
}

export default Home;
