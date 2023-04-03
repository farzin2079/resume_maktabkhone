import React from "react";
import { SocialIcon } from "react-social-icons";

import "./Title.css";

export default function Title(data) {
  return (
    <div>
      <h1 className="title">{data.data.title}</h1>
      <h2> {data.data.subtitle} </h2>
      <div className="icons-wrapper">
        {Object.keys(data.data.links).map((key) => (
          <SocialIcon url={data.data.links[key]} className="icon" />
        ))}
      </div>
    </div>
  );
}
