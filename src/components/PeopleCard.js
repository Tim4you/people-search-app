import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PeopleCard = ({ person }) => {
  return (
    <div className="card">
      <img src={person.profile_picture} alt="" />
      {/* <h1>Fashion Industry</h1> */}
      <ul>
        <li>
          <strong>Firstname:</strong> {person.first_name}
        </li>
        <li>
          <strong>Lastname:</strong> {person.last_name}
        </li>
        <li>
          <strong>Phone Number:</strong> {person.phone_number}
        </li>
      </ul>
      <div className="card-btn">
        <Link to="/HomePage" className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default PeopleCard;
