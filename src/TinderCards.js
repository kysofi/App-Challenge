import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards(props) {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:
        "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "Mark Zuckerberg",
      url:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fabout.fb.com%2Fmedia-gallery%2Fexecutives%2Fmark-zuckerberg%2F&psig=AOvVaw2ctpF1EGXq-UZ0LSmZSQGA&ust=1599034913283000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiY8LHDx-sCFQAAAAAdAAAAABAI",
    },
  ]);

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
