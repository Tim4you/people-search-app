import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import PeopleView from "./components/PeopleView";
import People from "./data-models/People";
import Navbar from "./components/layout/Navbar";
import PersonPage from "./components/PersonPage";

export const App = () => {
  const [query, setQuery] = useState("");
  const [people, setPeople] = useState([]);
  const [id, setId] = useState('');


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
  const man = people.filter((person) => person.id.includes(id));

  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        {/* <Route path="/person/:id" component={PersonPage}/> */}
          {/* <Route path="/person/:id" />
                    <PersonPage people={people} />
          <Route /> */}
          <Route path="/person/:id" render={() => <PersonPage people={people}
          getId={(e)=>setId(e)} man={man[0]}
          />} />

          <Route exact path="/">
            <SearchBar getQuery={(e) => filterPeople(e)} />
            <PeopleView
              people={query ? query : people}
              maximumLoadedCards={100}
            />
          </Route>
          <Route exact path="/homepage" component={HomePage} />
          {/* <Route path="/person/:id" render={({ match }) => {
          return <PersonPage />}} /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
