import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";
import InfiniteScroll from "react-infinite-scroll-component";

const PeopleView = ({ people, imagesNumber }) => {
  const [more, setMore] = useState(true);
  // const [items, setItems] = useState(Array.from({ length: 20 }));
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchMoreData();
    // eslint-disable-next-line
  }, [page, people]);

  function fetchMoreData() {
    if (page === 1) {
      setItems(people.slice(0, 10));
      return;
    }
    setMore(people.length > items.length);
    setItems(people.slice(0, page * 10));
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={() => setPage((page) => page + 1)}
      hasMore={more}
      loader={<h4>Loading...</h4>}
    >
      <section className="cards">
        {items.map((person) => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </section>
    </InfiniteScroll>
  );
};

export default PeopleView;
