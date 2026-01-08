import style from './Home.module.scss'
import SignInUp from '../../components/SignInUp/SignInUp'
import Intro from '../../components/Intro/Intro.jsx'

function Home () {
    return (
        <>
            <div className={style.container}>
                <Intro />
                <SignInUp />
            </div>
        </>
    )
}

export default Home;
