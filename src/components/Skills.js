import React from "react";
import Card from "./Card";

import "./Skills.css";

export default function Skills(data) {
  return (
    <div className="container my-5" id="skills">
      <div className="text-center fw-bold fs-4 mb-3"> {data.data.sections[1].title} </div>
      <Card items={data.data.sections[1].items} />
    </div>
  );
}
