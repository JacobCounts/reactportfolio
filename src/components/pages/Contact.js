import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col md-8 test">
          <form>
            <div className="form-group">
              <div className="col-8 test">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Jacob Counts"
                />
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Infamous213@gmail.com"
                />
                <div>
                  <Link
                    to={`${props.match.url}/learn`}
                    role="button"
                    className="btn btn-link"
                  >
                    Learn More
                  </Link>{" "}
                  <Link to="/contact" role="button" className="btn btn-link">
                    Learn Less
                  </Link>
                  <Route
                    exact
                    path={`${props.match.url}/learn`}
                    component={Learn}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
