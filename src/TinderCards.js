import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards(props) {
  const [people, setPeople] = useState([]);

  // piece of code which runs based on a condition
  useEffect(() => {
    // this is where the code runs
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.maps((doc) => doc.data()))
      );
    return () => {
      //this is the cleanup...header
      unsubscribe();
    };
  }, [people]);

  // this will run ONCE when the component loads, and never again

  // BAD
  // const people =[];
  // people.push('sonya','kolya')

  // GOOD ( Push to an array to React )
  // setPeople([...people,'sonya','kolya'])

  return (
    <div>
      <h1> Tinder Cards</h1>
      <div className="TinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up,down"]}
          >
            <div
              style={{ backgroundImage: `url (${person.name})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
