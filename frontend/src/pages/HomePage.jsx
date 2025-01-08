import React from 'react'
import HowToPlay from "./HowToPlayPage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const HomePage = () => {
  return (
    <body>
        <div className="home-container">
            <h1 className="home-title">Cipher Chain</h1>
            <div className="homepage-btns">
                <button><Route path="/HowToPlayPage" component={HowToPlay} /></button> 
                <button className="start-btn">Start</button>
                <button className="leader-btn">Leaderboard</button>
            </div>
        </div>
    </body>
  )
}

export default HomePage