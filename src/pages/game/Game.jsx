import React, { useState, useEffect } from 'react';
import backgroundImage from '../../images/Clouds.png';
import  './Game.module.css';
import { useLocation } from 'react-router-dom';


const choices = ['rock', 'paper', 'scissors'];

const Game = () => {
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");
    const [score, setScore] = useState({player: 0, computer: 0});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect (() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const play = (choice) => {
        const computer = choices [Math.floor(Math.random() *3)];
        setPlayerChoice(choice);
        setComputerChoice(computer);

        if (choice === computer) {
            setResult("It's a tie!");
        } else if (
            (choice === 'rock' && computer === 'scissors') ||
            (choice === 'paper' && computer === 'rock') ||
            (choice === 'scissors' && computer === 'paper')
        ) {
    
            setResult("You win!");
            setScore({...score, player: score.player + 1});

        } else {

            setResult("Computer wins!");
            setScore({...score, computer: score.computer + 1});

        } 
         } ;


         const buttonContainerStyle = {
            display: 'flex',
            flexDirection: windowWidth < 600 ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: windowWidth < 600 ? 10 : 20,
            marginTop: 20,
        };

        const buttonStyle = {
            padding: windowWidth < 600 ? '10px 20px' : '15px 30px',
            fontSize: windowWidth < 600 ? 16 : 20,
            cursor: 'pointer',
            borderRadius: 8,
            margin: windowWidth < 600 ? '5px 0' : '0 10px',
        };

        const containerStyle = {
            textAlign: 'center',
            marginTop: 50,
            maxWidth: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 10,
        
        };

        const resultStyle = {
            marginTop: 20,
            fontSize: windowWidth < 600 ? 16 : 18,
        };

        const pageStyle = {
            minHeight: '100vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'flex-start',
            paddingTop: 50,
            };


      const { state } = useLocation();
      const bg = state?.bg;
         return (
            <>
        <div className="bgimage" 
         style={{
            backgroundImage:`url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center", 
            }} >
                </div>
                
            

        <div style ={pageStyle}>
        <div style ={containerStyle}>
            <h2 >Rock Paper Scissors</h2>
            <div style ={buttonContainerStyle}>
                {choices.map((choice) => (
                    <button key={choice} onClick={() => play(choice)} style={buttonStyle}>
                        {choice}
                    </button>
                ))}
            </div>
            {playerChoice &&(
                <div style= {resultStyle}>
                    <p>Your choice: {playerChoice}</p>
                    <p>Computer's choice: {computerChoice}</p>
                    <h3>{result}</h3>
                    <p>Score - You: {score.player} | Computer: {score.computer}</p>
               
                    


            
                </div>
            )}
        </div>
        </div>
        </>

    );
}
export default Game;


