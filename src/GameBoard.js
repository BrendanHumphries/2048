import { useEffect, useState } from 'react';
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

    
    useEffect(() => {
            const firstValue = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
            console.log(firstValue);
            const secondValue = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
            console.log(secondValue);
    }, [])
    
    function handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowLeft':
                console.log('Left');
                break;
            case 'ArrowRight':
                console.log('Right');
                break;
            case 'ArrowUp':
                console.log('Up');
                break;
            case 'ArrowDown':
                console.log('Down');
                break;
            default:
                console.log('You pressed another button!')
        }
    }
    
    return (
        <div id='game-board' onKeyDown={handleKeyPress} tabIndex='0'>
            {gameState.map(tile => {
                return (
                    <GameButton key={tile.id} tile={tile} />
                )
            })}
        </div>
    )
}

export default GameBoard;