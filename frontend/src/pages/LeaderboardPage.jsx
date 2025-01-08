import React from 'react'

const LeaderboardPage = () => {
  return (
    <body>
        <button className="exit-btn">exit</button>
        <h1 className="leader-title">Leaderboard</h1>
        <div className="leaderboard-container">
          <div className="players">
            <div className="leaderboard-row">
              <div className="leaderboard-rank">#1</div>
              <span className="leaderboard-name">Player 1</span>
              <span className="leaderboard-score">1000</span>
            </div>
            <div className="leaderboard-row">
              <div className="leaderboard-rank">#2</div>
              <span className="leaderboard-name">Player 2</span>
              <span className="leaderboard-score">900</span>
            </div>
            <div className="leaderboard-row">
              <div className="leaderboard-rank">#3</div>
              <span className="leaderboard-name">Player 3</span>
              <span className="leaderboard-score">800</span>
            </div>
          </div>
        </div>
    </body>
  )
}

export default LeaderboardPage