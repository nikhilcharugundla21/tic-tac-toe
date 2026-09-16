import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import ModeSelector from './components/ModeSelector';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';
import MoveHistory from './components/MoveHistory';
import GameModal from './components/GameModal';
import { calculateWinner, isBoardFull, getBestMove } from './utils/minimax';
import { soundEngine } from './utils/audio';

export default function App() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentStep, setCurrentStep] = useState(0);
    const [gameMode, setGameMode] = useState('pvp'); // 'pvp' | 'ai'
    const [aiDifficulty, setAiDifficulty] = useState('hard'); // 'easy' | 'hard'
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 });
    const [isAiThinking, setIsAiThinking] = useState(false);

    const currentSquares = history[currentStep];
    const xIsNext = currentStep % 2 === 0;
    const currentTurn = xIsNext ? 'X' : 'O';

    const winInfo = calculateWinner(currentSquares);
    const winner = winInfo?.winner || null;
    const winningLine = winInfo?.line || null;
    const isTie = !winner && isBoardFull(currentSquares);
    const isGameOver = Boolean(winner || isTie);

    // Update sound engine preference
    useEffect(() => {
        soundEngine.enabled = soundEnabled;
    }, [soundEnabled]);

    // Update scoreboard when game finishes
    useEffect(() => {
        if (winner) {
            soundEngine.playWinSound();
            setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
        } else if (isTie) {
            soundEngine.playDrawSound();
            setScores((prev) => ({ ...prev, ties: prev.ties + 1 }));
        }
    }, [winner, isTie]);

    // Handle Square Click
    const handleSquareClick = useCallback(
        (index) => {
            if (currentSquares[index] !== null || isGameOver || isAiThinking) return;

            const nextSquares = [...currentSquares];
            nextSquares[index] = currentTurn;

            soundEngine.playMoveSound(currentTurn === 'X');

            const nextHistory = [...history.slice(0, currentStep + 1), nextSquares];
            setHistory(nextHistory);
            setCurrentStep(nextHistory.length - 1);
        },
        [currentSquares, isGameOver, isAiThinking, currentTurn, history, currentStep]
    );

    // Handle AI turn automatically when playing vs AI
    useEffect(() => {
        if (gameMode === 'ai' && !xIsNext && !isGameOver) {
            setIsAiThinking(true);
            const timer = setTimeout(() => {
                const aiMove = getBestMove(currentSquares, 'O', aiDifficulty);
                if (aiMove !== null) {
                    const nextSquares = [...currentSquares];
                    nextSquares[aiMove] = 'O';

                    soundEngine.playMoveSound(false);

                    setHistory((prev) => [...prev.slice(0, currentStep + 1), nextSquares]);
                    setCurrentStep((prev) => prev + 1);
                }
                setIsAiThinking(false);
            }, 450);

            return () => clearTimeout(timer);
        }
    }, [gameMode, xIsNext, isGameOver, currentSquares, aiDifficulty, currentStep]);

    // Reset current round
    const handleResetRound = () => {
        setHistory([Array(9).fill(null)]);
        setCurrentStep(0);
        setIsAiThinking(false);
    };

    // Change Game Mode
    const handleChangeMode = (mode) => {
        setGameMode(mode);
        handleResetRound();
    };

    // Change AI Difficulty
    const handleChangeDifficulty = (diff) => {
        setAiDifficulty(diff);
        handleResetRound();
    };

    // Jump to history step
    const handleJumpTo = (step) => {
        setCurrentStep(step);
    };

    return (
        <div className="app-container">
            <Header
                soundEnabled={soundEnabled}
                onToggleSound={() => setSoundEnabled(!soundEnabled)}
                onResetGame={handleResetRound}
            />

            <main className="main-content">
                <ModeSelector
                    gameMode={gameMode}
                    onChangeMode={handleChangeMode}
                    aiDifficulty={aiDifficulty}
                    onChangeDifficulty={handleChangeDifficulty}
                />

                <ScoreBoard
                    scores={scores}
                    turn={currentTurn}
                    gameMode={gameMode}
                />

                <Board
                    squares={currentSquares}
                    onSquareClick={handleSquareClick}
                    winningLine={winningLine}
                    disabled={isGameOver || isAiThinking}
                />

                <MoveHistory
                    history={history}
                    currentStep={currentStep}
                    onJumpTo={handleJumpTo}
                />
            </main>

            <GameModal
                winner={winner}
                isTie={isTie}
                gameMode={gameMode}
                onPlayAgain={handleResetRound}
            />
        </div>
    );
}
