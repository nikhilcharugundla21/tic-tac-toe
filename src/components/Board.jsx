import React from 'react';
import Square from './Square';

export default function Board({ squares, onSquareClick, winningLine, disabled }) {
    return (
        <div className="board-wrapper">
            <div className="board-grid">
                {squares.map((value, idx) => {
                    const isWinning = winningLine ? winningLine.includes(idx) : false;
                    return (
                        <Square
                            key={idx}
                            value={value}
                            onClick={() => onSquareClick(idx)}
                            isWinningSquare={isWinning}
                            disabled={disabled}
                        />
                    );
                })}
            </div>
        </div>
    );
}
