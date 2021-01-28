import React, { useEffect, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import PeopleView from "./components/PeopleView";
import People from "./data-models/People";

export const App = () => {
  const [query, setQuery] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const result = await axios("./projectcontacts.json");
      setPeople(
        result.data.map(
          (person) =>
            new People(
              person.profile_picture,
              person.first_name,
              person.last_name,
              person.id,
              person.phone_number
            )
        )
      );
    };
    fetchPeople();
  }, []);

  const filterPeople = (q) => {
    console.log(q);
    setQuery(
      people.filter((person) => {
        const searchValue = `${person.first_name} ${person.last_name}`.toLowerCase();
        if (!searchValue) {
          return false;
        }
        return searchValue.includes(q.toLowerCase());
      })
    );
  };

  return (
    <div className="container">
      <SearchBar getQuery={(e) => filterPeople(e)} />
      <PeopleView people={query ? query : people} maximumLoadedCards={100}/>
      {/* <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/SearchBar">
            <SearchBar />
          </Route>
        </Switch>
      </HashRouter> */}
    </div>
  );
};

export default App;
