import React from "react";
import Square from "./Square";
import './GameBoard.css';


const GameBoard = () => {

const [gameboard, setGameBoard] = React.useState(Array(9).fill(''))
const [turn, setTurn] = React.useState('X')
const [winner, setWinner] = React.useState('')

React.useEffect ( () => {
    console.log('useEffect')
    const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

let winningPositionsIndex = 0
let newWinner = ''

while (winningPositionsIndex < winningPositions.length && !newWinner) {
    const gameboardPositionToCheck = winningPositions[winningPositionsIndex];
    const gameboardToCheck = gameboardPositionToCheck.map(index => gameboard[index]);
    const checkingValue = gameboardToCheck[0]
    const isFinished = gameboardToCheck.every((value) => value === checkingValue && checkingValue)
    newWinner = isFinished ? checkingValue : null
    winningPositionsIndex++
}
if (newWinner) {
    setWinner(newWinner === 'X' ? 'Player 1' : 'Player 2')
}

}, [gameboard])

const handleClick = (index) => {
    console.log({index})
    if (index < 0 || index > 9 || gameboard[index] || winner) return
    const newGameBoard = [...gameboard]
    newGameBoard.splice(index, 1, turn)
    setGameBoard(newGameBoard)
    const newTurn = turn === 'X' ? 'O' : 'X'
    setTurn(newTurn)
}

const handleRestart = () => {
    setGameBoard(Array( 9).fill( ''))
    setWinner( '')
}

    return (
        <div className="container">
            <h1>Крестики и нолики</h1>
            <h2>Количество побед</h2>
            <input X></input><br></br>
            <input></input><br></br>
            <div className="gameboard">
                {gameboard.map((elem, index) => (
                    <Square key={index} value={elem} index={index} handleClick={handleClick}/>
                ))}
            </div>
            <button onClick={handleRestart} className='restart'>Restart</button>
            {winner && <h2>Победитель: {winner} ({turn === 'X' ? 'O' : 'X'})</h2>}
        </div>
    )
}

export default GameBoard