import React from 'react';

export default function Square({ value, onClick, isWinningSquare, disabled }) {
    return (
        <button
            className={`square ${value ? value.toLowerCase() : ''} ${isWinningSquare ? 'winning' : ''}`}
            onClick={onClick}
            disabled={disabled || value !== null}
        >
            {value && <span className="symbol-pop">{value}</span>}
        </button>
    );
}
