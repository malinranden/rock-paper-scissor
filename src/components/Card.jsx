import './Character.module.css'

function Card (props) {
    return (
        <>
            <div id={props.id} className={style.card-container} onClick={props.onClick} >
                <h1>{props.title}</h1>
                <img src={props.image} alt={props.title} className={style.img-character} />
                <p>Age: {props.age}</p>
                <p>Birthdate: {props.birthdate}</p>
                <p>Occupation: {props.occupation}</p>
            </div>
        </>
    )
}

export default Card;