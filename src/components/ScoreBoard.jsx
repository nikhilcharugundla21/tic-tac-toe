import React from 'react';

export default function ScoreBoard({ scores, turn, gameMode }) {
    return (
        <div className="scoreboard">
            <div className={`score-card x-card ${turn === 'X' ? 'turn-active' : ''}`}>
                <div className="player-label">
                    <span className="symbol-badge x-mark">X</span> Player 1
                </div>
                <div className="score-value">{scores.X}</div>
                {turn === 'X' && <span className="turn-indicator">Your Turn</span>}
            </div>

            <div className="score-card tie-card">
                <div className="player-label">Ties</div>
                <div className="score-value">{scores.ties}</div>
            </div>

            <div className={`score-card o-card ${turn === 'O' ? 'turn-active' : ''}`}>
                <div className="player-label">
                    <span className="symbol-badge o-mark">O</span> {gameMode === 'ai' ? 'Computer' : 'Player 2'}
                </div>
                <div className="score-value">{scores.O}</div>
                {turn === 'O' && <span className="turn-indicator">Thinking...</span>}
            </div>
        </div>
    );
}
