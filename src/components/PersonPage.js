import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const PersonPage = ({ getId, man }) => {
  const { id } = useParams();

  getId(id);

  if (!man) {
    return null;
  }

  const { profile_picture, first_name, last_name, phone_number } = man;
  //   const { fbProfileLink, fbUserName, friends, groups, friendsOfFriends} = man;
  const fbProfileLink = "https://www.facebook.com/tim.sigal";
  const fbUserName = "Tim Sigal";
  const livesIn = "Tel Aviv, Israel";
  const friends = 500;
  const groups = 100;
  const friendsOfFriends = 25000;

  return (
    <Fragment>
      <Link to="/" className="btn-light">
        {"< "}Back To Search {"<"}
      </Link>
      <div className="grid-2">
        <div className="card card-big">
          {first_name && (
            <Fragment>
              {/* <h3>Bio</h3> */}
              <h1>
                {first_name} {last_name}
              </h1>
            </Fragment>
          )}
          <ul className="bigcard-ul">
            <li>
              {fbUserName && (
                <Fragment>
                  <strong>Username: </strong> {fbUserName}
                </Fragment>
              )}
            </li>

            <li>
              {phone_number && (
                <Fragment>
                  <strong>Mobile Phone: </strong> {phone_number}
                </Fragment>
              )}
            </li>

            <li>
              {livesIn && (
                <Fragment>
                  <strong>Lives in: </strong> {livesIn}
                </Fragment>
              )}
            </li>
            <li><strong>faceBook Id: </strong> {id}</li>
            <a href={fbProfileLink} 
            className="btn btn-sm btn-dark my-1"
            style={{ width: "90%", marginTop: "0.5rem"}}
            >
              Visit faceBook Profile
            </a>
          </ul>
        </div>
        <div className="card">
          <img
            src={profile_picture}
            alt=""
            className="card-img-big"
          />
        </div>
      </div>
      <div className="badges text-center">
        <div className="badge badge-primary">Friends: {friends}</div>
        <div className="badge badge-success">Groups: {groups}</div>
        <div className="badge badge-light">
          Public Posts:{friendsOfFriends}
        </div>
        <div className="badge badge-ultra-light">
          Friends of Friends:{friendsOfFriends}
        </div>
      </div>

     
    </Fragment>
  );
};

// PersonPage.propTypes = {
//     man: PropTypes.object.isRequired,
//     fbUserName: PropTypes.string.isRequired
//     // groups:
//     // friendsOfFriends:

//   };
PersonPage.defaultProps = {
  fbProfileLink: "https://www.facebook.com/tim.sigal",
  fbUserName: "Tim Sigal",
  livesIn: "Tel Aviv, Israel",
  friends: 500,
  groups: 100,
  friendsOfFriends: 25000,
};

export default PersonPage;
