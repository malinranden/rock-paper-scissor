import style from './Home.module.css'
import SignInUp from '../../components/SignInUp/SignInUp';

function Home () {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                width: "100%",}}>
            <SignInUp />
        </div>
        </>
    )
}

export default Home;
