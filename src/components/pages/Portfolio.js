import React from "react";
import Card from "../Card";
import friends from "../friends.json";
import AutoMate from "../images/AutoMate.png";
import BurgerApp from "../images/BurgerApp.png";
import JingleAllTheWay from "../images/JingleAllTheWay.png";
import NoteTakerApp from "../images/NoteTakerApp.png";
import QuizGame from "../images/QuizGame.png";
import WeatherDash from "../images/WeatherDash.png";



function Portfolio(props) {
 const images = [JingleAllTheWay,BurgerApp,NoteTakerApp,AutoMate,QuizGame,WeatherDash]
  return (
    <div className="card">
      <div className="img-container">
        {friends.map((friend, i) => (
          <Card
            id={friend.id}
            name={friend.name}
            image={images [i]}
            text={friend.text}
            href={friend.href}
          />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
