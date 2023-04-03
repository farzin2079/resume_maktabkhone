import React from "react";

import "./About.css";

export default function About(data) {
  return (
    <div>
      <h3>{data.data.sections[0].title}</h3>
      <p> {data.data.sections[0].items[0].content} </p>
    </div>
  );
}
