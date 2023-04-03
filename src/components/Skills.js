import React from "react";
import Card from "./Card";

import "./Skills.css";

export default function Skills(data) {
  return (
    <div>
      <h3> {data.data.sections[1].title} </h3>
      <Card items={data.data.sections[1].items} />
    </div>
  );
}
