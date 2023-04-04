/* eslint-disable jsx-a11y/alt-text */
import { Element, Link } from "react-scroll";
import { useState } from "react";
import Snowfall from "react-snowfall";

import data from "./data.json";

import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";

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

  const changetheme = (e) => {
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

      <nav>
        <span>
          <img
            src={`${process.env.PUBLIC_URL}/img/theme.png`}
            onClick={changetheme}
          />
        </span>
        <h1 className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </h1>
      </nav>

      <Element name="title" className="fullpage">
        <Title data={data} />

        <Link to="about" smooth={true} duration={400} className="down">
          <img
            src={`${process.env.PUBLIC_URL}/img/down.png`}
            className="down-img-first"
          />
        </Link>
      </Element>

      <Element name="about" className="fullpage" id="about">
        <About data={data} />

        <Link to="cards" smooth={true} duration={400} className="down">
          <img
            src={`${process.env.PUBLIC_URL}/img/down.png`}
            className="down-img-secend"
          />
        </Link>
      </Element>

      <Element name="cards" className="fullpage" id="skills">
        <Skills data={data} />

        <Link to="title" smooth={true} duration={600} className="down">
          <img
            src={`${process.env.PUBLIC_URL}/img/down.png`}
            className="up-img"
          />
        </Link>
      </Element>
    </div>
  );
}

export default App;
