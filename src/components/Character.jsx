import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import Card from "./Card";
import Homer from "../assets/images/Homer.png";
import Lisa from "../assets/images/Lisa.png";
import Maggie from "../assets/images/Maggie.png"
import Marge from "../assets/images/Marge.png"

function Character() {
    const [character, setCharchter] = useState([]);
    const fetchData = async () => {
        try { //https://thesimpsonsapi.com/api // more options of simpsons api stuff
            const response = await fetch("https://thesimpsonsapi.com/api/characters")
            const data = await response.json();
            console.log(data);
            setCharchter(data.results);
        }
        catch (error) {
            console.log("Error fetching data", error);
        }
    }
    const image = {
        0: "https://cdn.thesimpsonsapi.com/500/character/1.webp",
        1: "https://cdn.thesimpsonsapi.com/500/character/2.webp",
        2: "https://cdn.thesimpsonsapi.com/500/character/3.webp",
        3: "https://cdn.thesimpsonsapi.com/500/character/4.webp",
        4: "https://cdn.thesimpsonsapi.com/500/character/5.webp",
    };
    useEffect(() => {fetchData();}, []);

    const [chooseCharacter, setChooseCharacter] = useState(false);
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openGame = () => {
        if (!chooseCharacter) {
            alert("No character selected");
            return;
        }
        let bg;
        let name;
        switch (selectedIndex) {
            case (0):
                bg = Homer,
                name = "Homie"
                break;
            case (1):
                bg = Marge;
                break;
            case (2):
                bg = "https://cdn.pixabay.com/photo/2015/03/01/21/44/bart-655318_1280.png";
                break;
            case (3):
                bg = Lisa;
                break;
            case (4):
                bg = Maggie;
                break;
            default:
                alert("something went wrong")
                return;
            }
        navigate("/game", { state: {bg, name} });
    };
    
    return (
        <>
            <div className="opponents-background">
                <h1>Choose your opponent!</h1> 
                <div className="opponents-div">
                    <Card 
                        id={[0]} // behövs ej...
                        title={character[0]?.name}
                        image={image[0]}
                        age={character[0]?.age}
                        birthdate={character[0]?.birthdate}
                        occupation={character[0]?.occupation}
                        isSelected={selectedIndex === 0}
                        onClick={() => {setChooseCharacter(true); setSelectedIndex(0);}} 
                    />
                    <Card 
                        title={character[1]?.name}
                        image={image[1]}
                        age={character[1]?.age}
                        birthdate={character[1]?.birthdate}
                        occupation={character[1]?.occupation}
                        isSelected={selectedIndex === 1}
                        onClick={() => {setChooseCharacter(true); setSelectedIndex(1);}}
                    />
                    <Card
                        title={character[2]?.name}
                        image={image[2]}
                        age={character[2]?.age}
                        birthdate={character[2]?.birthdate}
                        occupation={character[2]?.occupation}
                        isSelected={selectedIndex === 2}
                        onClick={() => {setChooseCharacter(true); setSelectedIndex(2);}}
                    />
                    <Card 
                        title={character[3]?.name}
                        image={image[3]}
                        age={character[3]?.age}
                        birthdate={character[3]?.birthdate}
                        occupation={character[3]?.occupation}
                        isSelected={selectedIndex === 3}
                        onClick={() => {setChooseCharacter(true); setSelectedIndex(3);}}
                    />
                    <Card 
                        title={character[4]?.name}
                        image={image[4]}
                        age={character[4]?.age}
                        birthdate={character[4]?.birthdate}
                        occupation={character[4]?.occupation}
                        isSelected={selectedIndex === 4}
                        onClick={() => {setChooseCharacter(true); setSelectedIndex(4);}}
                    />
                </div>
                <button className="btn-startgame" onClick={openGame}>Start Game</button>
            </div>
        </>
    )
} 
export default Character;