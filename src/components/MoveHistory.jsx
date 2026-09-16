import React from 'react';

export default function MoveHistory({ history, currentStep, onJumpTo }) {
    if (history.length <= 1) return null;

    return (
        <div className="history-container">
            <h4>Move History</h4>
            <div className="history-chips">
                {history.map((step, moveIdx) => {
                    const desc = moveIdx === 0 ? 'Game Start' : `Move #${moveIdx}`;
                    const isCurrent = moveIdx === currentStep;

                    return (
                        <button
                            key={moveIdx}
                            className={`history-chip ${isCurrent ? 'active' : ''}`}
                            onClick={() => onJumpTo(moveIdx)}
                        >
                            {desc}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
