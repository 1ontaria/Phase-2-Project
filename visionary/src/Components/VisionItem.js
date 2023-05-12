import React from "react";

function VisionItem({ item }) {
  return (
    <div className="card">
      <h3>{item.vision}</h3>
      <h4>{item.quote}</h4>
      <img src={item.image} alt="" />

      <form>
        Goal Achieved?: <br /> Yes{" "}
        <input type="radio" name="manifested" value={item.isComplete}></input>
        <br /> No:{" "}
        <input type="radio" name="manifested" value={item.isComplete}></input>
      </form>
    </div>
  );
}

export default VisionItem;
