import { useState } from "react";
import dice1 from "../assets/dice-1.png";
import dice2 from "../assets/dice-2.png";
import dice3 from "../assets/dice-3.png";
import dice4 from "../assets/dice-4.png";
import dice5 from "../assets/dice-5.png";
import dice6 from "../assets/dice-6.png";

const diceImgArr = [dice1, dice2, dice3, dice4, dice5, dice6];

const players = {
    player1: {
        currentScore: 0,
        totalScore: 0
    },
    player2: {
        currentScore: 0,
        totalScore: 0
    }
};



function Game() {
    const [currentDiceImage, setCurrentDiceImage] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(players["player1"]);

    function handleRollDice() {
        let rolledNumber = Math.trunc(Math.random() * 5) + 1;
        console.log(rolledNumber)
        setCurrentDiceImage(() => rolledNumber)

        if (rolledNumber !== 0) {
            setCurrentPlayer({ ...currentPlayer, currentScore: currentPlayer.currentScore + rolledNumber + 1 })
        }
    }
    return (
        <div className=" flex justify-between m-5 max-w-[800px] h-[500px] relative p-5 rounded-md">
            <div className="flex flex-col items-center gap-5 w-[400px] justify-around p-5 bg-lime-200">
                <h1 className="font-semibold text-3xl">PLAYER 1</h1>
                <h2 className="font-semibold text-6xl">0</h2>
                <div className="text-center">
                    <p className="font-semibold text-2xl">CURRENT</p>
                    <p className="font-semibold text-2xl">{currentPlayer.currentScore}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 w-[400px] justify-around p-5 bg-lime-300">
                <h1 className="font-semibold text-3xl">PLAYER 2</h1>
                <h2 className="font-semibold text-6xl">0</h2>
                <div className="text-center">
                    <p className="font-semibold text-2xl">CURRENT</p>
                    <p className="font-semibold text-2xl">{currentPlayer.currentScore}</p>
                </div>
            </div>
            <OverLay onRollDice={handleRollDice} currentDiceImage={currentDiceImage} />
        </div>
    )
}


function OverLay({ onRollDice, currentDiceImage }) {
    return <div className="flex flex-col justify-around absolute items-center h-[500px] top-1 left-83">
        <Button>NEW GAME</Button>
        <img src={diceImgArr[currentDiceImage]} alt="dice" className="w-15" />
        <div className="flex flex-col gap-4">
            <Button onClick={onRollDice}>ROLL DICE</Button>
            <Button>HOLD</Button>
        </div>
    </div>
}


function Button({ children, onClick }) {
    return <button onClick={onClick} className="cursor-pointer rounded-3xl bg-lime-50 px-6 py-2">{children}</button>
}

export default Game
