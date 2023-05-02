import React, { useState } from "react";
import Header from "../Header";
import MainContainer from "./MainContainer";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import WishlistForm from "./WishlistForm";

function App() {
  const [darkMode, setDarkMode] = useState("false");

  function switchMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div className={darkMode ? "app-light" : "app-dark"}>
      <Route exact path="/">
        <MainContainer />
      </Route>
      <Route path="/WishlistForm"> Create New Goal</Route>
      <h1>
        Hey Ontaria, You got this! Don't ever give up! YOU CAN FIGURE THIS OUT!!
      </h1>
      <Header onSwitch={switchMode} darkMode={darkMode} />
      <MainContainer />
      <WishlistForm />
    </div>
  );
}

export default App;
