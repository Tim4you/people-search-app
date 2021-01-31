import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PersonPage from "./PersonPage";
import { withRouter } from "react-router-dom";

const PeopleCard = ({person}) => {
  // const [personId, setPersonId] = useState(-1);
  // console.log(person);
  return (
    <div className="card">
      <img src={person.profile_picture} alt="" />
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
      <Link className="card-btn"  to={`person/${person.id}`}>
      <div className="btn btn-dark btn-sm my-1">        
        More
      </div>
      </Link>
    </div>
  );
};

// export default withRouter(PeopleCard);
export default PeopleCard;
