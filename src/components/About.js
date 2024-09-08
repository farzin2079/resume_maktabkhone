import React from "react";

import "./About.css";

export default function About(data) {
  return (
    <div className="container my-5" id="about">
      <div className="text-center fs-4 fw-bold mb-3">{data.data.sections[0].title}</div>
      <p className="mx-5 lh-larg fs-5" > {data.data.sections[0].items[0].content} </p>
    </div>
  );
}
