import React from 'react';

export default function Header({ soundEnabled, onToggleSound, onResetGame }) {
    return (
        <header className="header">
            <div className="logo-container">
                <span className="logo-icon x-glow">X</span>
                <span className="logo-icon o-glow">O</span>
                <h1>Tic Tac Toe</h1>
            </div>
            <div className="header-actions">
                <button
                    className={`icon-btn ${soundEnabled ? 'active' : ''}`}
                    onClick={onToggleSound}
                    title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
                >
                    {soundEnabled ? '🔊' : '🔇'}
                </button>
                <button
                    className="secondary-btn"
                    onClick={onResetGame}
                    title="Reset Board"
                >
                    🔄 New Game
                </button>
            </div>
        </header>
    );
}
