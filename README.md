# ❌⭕ Tic Tac Toe — Modern React App

A feature-rich, visually stunning **Tic Tac Toe** web application built with **React**, **Vite**, and **Vanilla CSS**. Features dual game modes (Player vs Player and Player vs AI with Unbeatable Minimax Algorithm), Web Audio API sound synthesis, glassmorphism UI design, scorekeeping, and move history time-travel.

![Tic Tac Toe Preview](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 👥 **Player vs Player Mode**: Local 2-player mode on a single device.
- 🤖 **Player vs Computer (AI)**:
  - **Easy**: Casual mode with randomized AI counterplay.
  - **Hard (Minimax)**: Unbeatable AI powered by the **Minimax Decision Algorithm**.
- 🔊 **Web Audio API Sound Engine**: Custom synthesized sound effects for moves, win fanfares, and draws with zero external asset dependencies (with Mute/Unmute toggle).
- 🏆 **Scoreboard & Game History**: Tracks wins for Player 1, Player 2 / AI, and Ties. Includes interactive move history chips for stepping back through moves.
- 🎨 **Modern Dark Glassmorphism UI**: Neon cyan (`X`) and magenta (`O`) visual accents, glowing winning line highlights, and smooth victory modal dialogs.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop screens.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tic-tac-toe.cmd
   cd tic-tac-toe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 🛠️ Build & Deployment

To generate the static production build:

```bash
npm run build
```

The compiled assets will be placed in the `dist/` directory.

### Deploying to GitHub Pages

1. Install `gh-pages` as a dev dependency:
   ```bash
   npm install -D gh-pages
   ```

2. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

---

## 📁 Project Structure

```
tic-tac-toe/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Board.jsx          # 3x3 Grid component
│   │   ├── Square.jsx         # Individual cell component
│   │   ├── ScoreBoard.jsx     # Score tracking component
│   │   ├── ModeSelector.jsx   # PvP / AI mode toggle
│   │   ├── MoveHistory.jsx    # Interactive move history chips
│   │   ├── GameModal.jsx      # Game over modal dialog
│   │   └── Header.jsx         # Navigation bar & audio toggle
│   ├── utils/
│   │   ├── minimax.js         # Win calculation & Minimax AI engine
│   │   └── audio.js           # Web Audio API synthesizer
│   ├── App.jsx                # Main application state logic
│   ├── index.css              # Glassmorphism design system
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
