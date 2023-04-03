import React from "react";
import "./Card.css";

export default function Card(items) {
  return (
    <div className="cards-wrapper">
      {items.items.map((skill) => (
        <div className="card">
          <div className="image-wrapper">
            <img src={skill.content.image} alt="#" />
          </div>
          <div className="skill-title-wrapper">
            <h4> {skill.content.title} </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
