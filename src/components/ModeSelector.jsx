import React from 'react';

export default function ModeSelector({ gameMode, onChangeMode, aiDifficulty, onChangeDifficulty }) {
    return (
        <div className="mode-selector-card">
            <div className="mode-toggle">
                <button
                    className={`mode-btn ${gameMode === 'pvp' ? 'active' : ''}`}
                    onClick={() => onChangeMode('pvp')}
                >
                    👥 2 Player (PvP)
                </button>
                <button
                    className={`mode-btn ${gameMode === 'ai' ? 'active' : ''}`}
                    onClick={() => onChangeMode('ai')}
                >
                    🤖 vs Computer (AI)
                </button>
            </div>

            {gameMode === 'ai' && (
                <div className="difficulty-toggle">
                    <span className="diff-label">AI Level:</span>
                    <button
                        className={`diff-btn ${aiDifficulty === 'easy' ? 'active' : ''}`}
                        onClick={() => onChangeDifficulty('easy')}
                    >
                        🌱 Easy
                    </button>
                    <button
                        className={`diff-btn ${aiDifficulty === 'hard' ? 'active' : ''}`}
                        onClick={() => onChangeDifficulty('hard')}
                    >
                        🔥 Hard (Minimax)
                    </button>
                </div>
            )}
        </div>
    );
}
