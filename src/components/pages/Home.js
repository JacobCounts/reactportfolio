import React from "react";

import jingle from "../images/jingle.gif";
import quiz from "../images/quiz.gif";
import auto from "../images/auto.gif";

function Home() {
  return (
    
    <div className="container mt-5">
      <h1>Welcome to Jacob Counts Portfolio...</h1>
      <div className="row">
        <div className="col-md-7 offset-md-1">
          <div
            id="carouselExampleInterval"
            className="carousel slide carousel-fade shadow p-3" style={{width: "48rem"}}
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="6500">
                <img src={jingle} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="6500">
                <img src={quiz} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="6500">
                <img src={auto} className="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleInterval"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleInterval"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
