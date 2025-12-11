import style from './Intro.module.scss'

function Intro() {

    return (
        <div>
            <div className={style.intro}>
                <h1 className={style.intro__title}>Bloop</h1>
                <div className={style.intro__clouds}>
                    <div className={style.back}></div>
                    <div className={style.mid}></div>
                    <div className={style.front}></div>
                </div>
            </div>
        </div>
    )
}

export default Intro
