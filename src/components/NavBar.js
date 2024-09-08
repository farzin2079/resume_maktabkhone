import React from "react";

export default function NavBar({ changetheme }) {
  return (
      <nav className="navbar navbar-expand-lg fixed-top ">
    <div className="container ">
        <button className="navbar-brand change-Theme" onClick={changetheme}>
          <img src={`${process.env.PUBLIC_URL}/img/theme.png`} />
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link fs-5" href="#about">
              درباره من
            </a>
            <a className="nav-link fs-5" href="#skills">
              مهارت ها
            </a>
            <a className="nav-link fs-5" href="#projects">
              پروژه ها
            </a>
          </div>
        </div>
    </div>
      </nav>
  );
}
