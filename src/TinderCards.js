import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function TinderCards(props) {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072",
    },
    {
      name: "mark zuckerberg",
      url:
        "https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?fit=1621%2C1080",
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
      {people.map((person) => (
        <TinderCard className="swipe" key={person.name}>
          <div
            style={{ backgroundImage: "url( ${person.name}) " }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
