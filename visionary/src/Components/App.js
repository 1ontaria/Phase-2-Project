import React, { useState } from "react";
import MainContainer from "./MainContainer";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import WishlistForm from "./WishlistForm";
import Header from "./Header";
import Workouts from "./Workouts";

function App() {
  const [darkMode, setDarkMode] = useState("false");

  function switchMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div className={darkMode ? "app-light" : "app-dark"}>
      <Header onSwitch={switchMode} darkMode={darkMode} />
      <Route exact path="/">
        <MainContainer />
      </Route>
      <Route path="/WishlistForm">
        <WishlistForm />
      </Route>
      <Route path="/Workouts">
        <Workouts />
      </Route>
    </div>
  );
}

export default App;
