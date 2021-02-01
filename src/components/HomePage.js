import React, { Fragment } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage ">
        <h1>SEARCH ANYBODY EVERYWHERE ON PEOPLE FINDER WEBSITE</h1>
        <p>Did you know that you can search for people by their phone number, absolutely free, on our website? No? Give it a try!</p>
        <Link className="card-btn" to="/">
        <div className="home-btn">   Let's Go  </div>     

        
          </Link>
      </div>
    </Fragment>
  );
};

export default HomePage;
