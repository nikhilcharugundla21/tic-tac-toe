import React from 'react';

export default function GameModal({ winner, isTie, gameMode, onPlayAgain }) {
    if (!winner && !isTie) return null;

    let title = '';
    let subtitle = '';
    let badgeClass = '';

    if (winner) {
        if (gameMode === 'ai') {
            title = winner === 'X' ? '🎉 You Won!' : '💻 Computer Won!';
            subtitle = winner === 'X' ? 'Outstanding strategy!' : 'Better luck next turn!';
        } else {
            title = `🎉 Player ${winner} Wins!`;
            subtitle = 'Congratulations on your victory!';
        }
        badgeClass = winner.toLowerCase() === 'x' ? 'x-badge' : 'o-badge';
    } else if (isTie) {
        title = '🤝 It\'s a Tie!';
        subtitle = 'Equally matched forces!';
        badgeClass = 'tie-badge';
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-card">
                <div className={`modal-badge ${badgeClass}`}>
                    {winner || '='}
                </div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <button className="primary-btn" onClick={onPlayAgain}>
                    Play Again
                </button>
            </div>
        </div>
    );
}
