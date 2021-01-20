import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card mb-3 ml-2 mt-2 text-center shadow-lg p-1 mb-5 
    bg-light rounded border-dark"
      style={{ width: "65rem" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-4 shadow-lg p-1 mb-1">
          <img src={props.image} alt={props.text} />
        </div>
        <div className="col-md-3 text-center">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.text}</p>
            <a
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
