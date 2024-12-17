import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import HomePage from './pages/HomePage';
// import LevelPage from './pages/LevelPage';
import GamePage from './pages/GamePage';
import HowToPlayPages from './pages/HowToPlayPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  // { path: '/levels', element: <LevelPage /> },
  { path: '/game', element: <GamePage /> },
  { path: '/how-to-play', element: <HowToPlayPages /> },
  { path: '/leaderboard', element: <LeaderboardPage /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);