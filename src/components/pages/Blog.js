import React from "react";
import AutoMate from "../images/AutoMate.png";
import BurgerApp from "../images/BurgerApp.png";
import JingleAllTheWay from "../images/JingleAllTheWay.png";
import NoteTakerApp from "../images/NoteTakerApp.png";
import QuizGame from "../images/QuizGame.png";
import WeatherDash from "../images/WeatherDash.png";

function Blog() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm">
          <div className="card text-center">
            <img src={JingleAllTheWay} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Jingle All The Way</h5>
              <p className="card-text">
                Class project #2. Allows user to create a gift list using etsy
              </p>
              <a
                href="https://jingle-all-the-way.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                View App
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card text-center">
            <img src={BurgerApp} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Eat Da Burger</h5>
              <p className="card-text">
                Allows user to add a burger to the list and doevour it!
              </p>
              <a
                href="https://eat-da-burger-jpc.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                View App
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card text-center">
            <img src={NoteTakerApp} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
                A simple app that allows user to add/remove notes{" "}
              </p>
              <a
                href="https://jpc-note-taker.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                View App
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-sm">
          <div className="card text-center">
            <img src={AutoMate} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Auto Mate</h5>
              <p className="card-text">
                Class project #1. User can enter VIN# and find stats of vehicle
              </p>
              <a
                href="https://malsham3.github.io/auto-mate/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                View App
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div className="card text-center">
            <img src={QuizGame} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Quiz Game</h5>
              <p className="card-text">
                Quiz game about history of the USA. Created using JavaScript
              </p>
              <a
                href="https://jacobcounts.github.io/jsQuiz-game/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                View App
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card text-center">
            <img src={WeatherDash} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                Allow user to enter city and get current and 5 day forcast
              </p>
              <a
                href="https://jacobcounts.github.io/weatherDashboard/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                View App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
