import React from "react";
import AutoMate from "../images/AutoMate.png";
import BurgerApp from "../images/BurgerApp.png";
import JingleAllTheWay from "../images/JingleAllTheWay.png";
import NoteTakerApp from "../images/NoteTakerApp.png";
import QuizGame from "../images/QuizGame.png";
import WeatherDash from "../images/WeatherDash.png";

function Home() {
  return (
  <div className="container mt-3">
    <div className="row">
      <div className="col-md-7 offset-md-1">

      <div id="carouselExampleInterval" className="carousel slide carousel-fade shadow p-3" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2500">
      <img src={JingleAllTheWay} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={BurgerApp}className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={QuizGame}className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={AutoMate}className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src={WeatherDash}className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={NoteTakerApp} className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>










      </div>
    </div>
  </div>

  );
}

export default Home;
