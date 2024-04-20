
import React, { useState, useEffect } from 'react';
import "./Home.css";
const Home = () => {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Update ball position randomly
  const updateBallPosition = () => {
    const maxX = window.innerWidth - 100; // Adjust the value according to the size of your ball
    const maxY = window.innerHeight - 100; // Adjust the value according to the size of your ball
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    setBallPosition({ x: newX, y: newY });
  };

  // Handle click on the ball
  const handleClick = () => {
    console.log(ballPosition, "clicled")
    setClicks(clicks + 1);
    updateBallPosition();
  };

  // Update time elapsed
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeElapsed]);

  return (
    <div className="App">
      <div className="game-container">
        <div className="ball" style={{ top: ballPosition.y, left: ballPosition.x }} onClick={handleClick}></div>
        <div className="scoreboard">
          <p>Clicks: {clicks}</p>
          <p>Time: {timeElapsed}s</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

