import React from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Portfolio Builder</h1>
      <p className="lead">
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
        fermentum massa justo sit amet risus.
      </p>
      <p>
        <Link className="nav-item nav-link" to="/register">
          <a className="btn btn-lg btn-success"  role="button">
            Sign up today
          </a>
        </Link>
      </p>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
    </div>
  );
};
export default Landing;
