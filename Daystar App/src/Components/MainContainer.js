import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";
import News from "./News";
import Social from "./Social";

function MainContainer() {
  return (
    <div>
      <h2>
        <Tasks />
        <News />
        <Social />
      </h2>
    </div>
  );
}

export default MainContainer;
