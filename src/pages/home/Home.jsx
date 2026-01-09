import {useState} from 'react'
import style from './Home.module.scss'
import Intro from '../../components/Intro/Intro.jsx'
import SignInUp from '../../components/SignInUp/SignInUp'


function Home () {

    return (
        <>
            <div className={style.container}>
                <Intro />
            </div>
        </>
    )
}

export default Home;
