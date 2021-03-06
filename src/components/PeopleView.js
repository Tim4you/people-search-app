import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import InfiniteScroll from "react-infinite-scroll-component";
import PersonPage from "./PersonPage";

const PeopleView = ({ people, maximumLoadedCards }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line
  }, [page, people]);

  const fetchMoreData = () => {
    if (page > maximumLoadedCards) {
      setItems(people.slice(0, maximumLoadedCards * 10));
      return;
    }
    setItems(people.slice(0, page * 10));
  };

  return (
    <InfiniteScroll
      dataLength={ items.length}
      next={() => setPage((page) => page + 1)}
      hasMore={true}
      loader={
        page > maximumLoadedCards ? 
        (<h4>You are tring to load more than 1000 people. Contact an admin for more.</h4>) 
        : 
        (<h4>You found <strong>{items.length}</strong> people</h4>)
      }
    >
      <section className="cards">
        {items.map((person) => (
            <PeopleCard  key={person.id} person={person} />
        ))}
      </section>
    </InfiniteScroll>
  );
};

export default PeopleView;
