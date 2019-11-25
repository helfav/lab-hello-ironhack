import React, { Component } from "react";
import Header from "./Header";
import Items from "./items";

function App() {
  return (
    <div>
      <Header />
      <div className="all-items">
        <React.Fragment>
          <Items
            img="./images/icon1.png"
            title="Declarative"
            description="React makes it painless to create interactive UIs"
          />
          <Items
            img="./images/icon2.png"
            title="Components"
            description="React makes it painless to create interactive UIs"
          />
          <Items
            img="./images/icon3.png"
            title="Single Way"
            description="React makes it painless to create interactive UIs"
          />
          <Items
            img="./images/icon4.png"
            title="JSX"
            description="React makes it painless to create interactive UIs"
          />
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
