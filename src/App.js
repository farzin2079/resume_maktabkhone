// @ts-nocheck
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import Snowfall from "react-snowfall";

import data from "./data.json";

import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Seo from "./components/Seo";
import NavBar from "./components/NavBar";

function App() {
  const [color, setColor] = useState("#black");
  const [background, setBackground] = useState("#ffffff");
  const [next, setNext] = useState(0);

  var i = next;
  const backgroundColors = [
    "#0093E9",
    "#85FFBD",
    "#FFBBEC",
    "#F76B1C",
    "#F4D03F",
  ];
  const colors = ["#ccc", "#004080", "#333", "007070", "#804000"];

  const changetheme = () => {
    setColor(colors[i]);
    setBackground(backgroundColors[i]);

    i++;
    if (i > colors.length) {
      i = 0;
    }
    setNext(i);
  };

  document.body.style.backgroundColor = background;
  document.body.style.color = color;

  return (
    <div>
      <Snowfall
        color={color}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
      />

        <Seo />
        <NavBar changetheme={changetheme} />

      <div className="custom-full">
        <Title data={data} />
      </div>

      <div className="custom-full">
        <About data={data} />
      </div>

      <div className="custom-full">
        <Skills data={data} />
      </div>
      {/* <div className="custom-full">
        <Project item={data} />
      </div> */}
    </div>
  );
}

export default App;
