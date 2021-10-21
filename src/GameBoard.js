import { getByTitle } from '@testing-library/react';
import { useState } from 'react';
import GameButton from './GameButton'

function GameBoard() {
    const [gameState, setGameState] = useState([
        {
            id: 1,
            number: undefined
        },
        {
            id: 2,
            number: undefined
        },
        {
            id: 3,
            number: undefined
        },
        {
            id: 4,
            number: undefined
        },
        {
            id: 5,
            number: undefined
        },
        {
            id: 6,
            number: undefined
        },
        {
            id: 7,
            number: undefined
        },
        {
            id: 8,
            number: undefined
        },
        {
            id: 9,
            number: undefined
        },
        {
            id: 10,
            number: undefined
        },
        {
            id: 11,
            number: undefined
        },
        {
            id: 12,
            number: undefined
        },
        {
            id: 13,
            number: undefined
        },
        {
            id: 14,
            number: undefined
        },
        {
            id: 15,
            number: undefined
        },
        {
            id: 16,
            number: undefined
        }
    ])
    
    return (
        <div id='game-board'>
            {gameState.map(tile => {
                return (
                    <GameButton key={tile.id} tile={tile} />
                )
            })}
        </div>
    )
}

export default GameBoard;