import React, { Fragment } from "react";
import { Jumbotron, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <Fragment>
      <div style={{ width: "600px", height: "600px", background: "gray" }}>
        <h3>HomePage</h3>
        <button variant="outline-secondary" href="#/SearchBar">
          Woof!
        </button>
      </div>
    </Fragment>
  );
};

export default HomePage;
