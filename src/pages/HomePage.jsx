import React from 'react'

const HomePage = () => {
  return (
    <body>
        <div className="home-container">
            <h1 class="home-title">Cipher Chain</h1>
            <div class="homepage-btns">
                <button href="/how-to-play" class="how-to-play-btn">How To Play</button>
                <button class="start-btn">Start</button>
                <button class="leader-btn">Leaderboard</button>
            </div>
        </div>
    </body>
  )
}

export default HomePage