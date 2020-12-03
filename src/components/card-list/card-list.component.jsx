import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((m) => (
        <Card key={m.id} monster={m} />
      ))}
    </div>
  );
};

//React uses 'key' attribute to decide what to update when there is a state change
