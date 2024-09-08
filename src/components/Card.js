import React from "react";
import "./Card.css";

export default function Card(items) {
  return (
    <div className="card-component row row-cols-2 row-cols-sm-3 row-cols-md-4">
      {items.items.map((skill) => (
        <div className="col d-flex justify-content-center" key={skill.id}>
          <div className="custom-card p-2" >
            <div className="image-wrapper">
              {skill.content.icon && (
                <i
                  className={skill.content.icon}
                  style={{
                    fontSize: "70px",
                  }}
                ></i>
              )}
              {skill.content.image && (
                <img src={skill.content.image} alt={skill.content.title} />
              )}
              {skill.content.link && <a href={skill.content.link}>Preview</a>}
            </div>
            <div className="skill-title-wrapper">
              <h4> {skill.content.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
