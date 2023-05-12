import React, { useState } from "react";
import MainContainer from "./MainContainer";
import { Route, Routes } from "react-router-dom";
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
      <div>
        {" "}
        <button onClick={switchMode}>{darkMode ? "Dark" : "Light"}</button>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<MainContainer />}></Route>
        <Route path="/new" element={<WishlistForm />} />
      </Routes>
    </div>
  );
}

export default App;
