import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PeopleCard from "./PeopleCard";

const PersonPage = ({ getId, people }) => {
  const { id } = useParams();
//   const [pid, setPid] = useState('');

//   useEffect(() => {
//     // setPid(id);
    getId(id)
//     // eslint-disable-next-line
//   }, []);
// debugger
if (!people || people.length===0) {
     return null
}
//   const man = people.filter((person) => person.id.includes(pid));
  console.log(id);
//   console.log(man);

//   setPid(id);
  const man = people.filter((person) => person.id.includes(id));
  return (
    <Fragment>
      <Link to="/" className=" btn-link">
        Back To Search
      </Link>

      <div>hello${man[0].first_name}</div>
    </Fragment>
  );
};

export default PersonPage;
