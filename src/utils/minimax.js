export const WINNING_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export function calculateWinner(squares) {
    for (let i = 0; i < WINNING_LINES.length; i++) {
        const [a, b, c] = WINNING_LINES[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: WINNING_LINES[i] };
        }
    }
    return null;
}

export function isBoardFull(squares) {
    return squares.every((sq) => sq !== null);
}

// Minimax algorithm for unbeatable AI
export function getBestMove(squares, aiPlayer, difficulty = 'hard') {
    const emptyIndices = squares
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null);

    if (emptyIndices.length === 0) return null;

    // Easy mode: random pick with occasional smart block
    if (difficulty === 'easy') {
        // 40% chance to make smart move, 60% random
        if (Math.random() > 0.4) {
            const randomIndex = Math.floor(Math.random() * emptyIndices.length);
            return emptyIndices[randomIndex];
        }
    }

    const humanPlayer = aiPlayer === 'O' ? 'X' : 'O';

    function minimax(board, depth, isMaximizing) {
        const winInfo = calculateWinner(board);
        if (winInfo?.winner === aiPlayer) return 10 - depth;
        if (winInfo?.winner === humanPlayer) return depth - 10;
        if (isBoardFull(board)) return 0;

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = aiPlayer;
                    const score = minimax(board, depth + 1, false);
                    board[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < board.length; i++) {
                if (board[i] === null) {
                    board[i] = humanPlayer;
                    const score = minimax(board, depth + 1, true);
                    board[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }

    let bestScore = -Infinity;
    let move = emptyIndices[0];

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
            squares[i] = aiPlayer;
            const score = minimax(squares, 0, false);
            squares[i] = null;
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    return move;
}
