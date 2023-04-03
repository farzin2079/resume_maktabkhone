/* eslint-disable jsx-a11y/alt-text */
import { Element, Link } from "react-scroll";

import data from "./data.json";

import "./App.css";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hook/useTheme";


function App() {
  const { color } = useTheme();

  return (
    <div className="App" style={{ background: color}}>
      <ThemeSelector />

      <Element name="title" className="fullpage first">
        <Title data={data} />

        <Link to="about" smooth={true} duration={400} className="down">
          <img src="img/down.png" className="down-img" />
        </Link>
      </Element>

      <Element name="about" className="fullpage secend">
        <About data={data} />

        <Link to="cards" smooth={true} duration={400} className="down">
          <img src="img/down.png" className="down-img" />
        </Link>
      </Element>

      <Element name="cards" className="fullpage third">
        <Skills data={data} />

        <Link to="title" smooth={true} duration={600} className="down">
          <img src="img/down.png" className="up-img" />
        </Link>
      </Element>
    </div>
  );
}

export default App;
