import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <nav id="nav">
        <img
          className="logo"
          src="./images/ironhack-logo.svg"
          alt="ironhack logo"
        />
        <img src="./images/menu-top.svg" alt="menu top" />
      </nav>
      <div id="container-main">
        <h1>Say hello to ReactJS</h1>
        <h3>
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer.
        </h3>
        <button id="button">Awesome!</button>
      </div>
    </header>
  );
}
