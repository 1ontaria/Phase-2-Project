import React from "react";

function WishlistForm() {
  return (
    <div>
      <form>
        <input type="text" name="goal title" placeholder="Add new goal here" />
        <br />
        <input type="text" name="image" placeholder="Add image URL here" />
        <br />
        <button>Sumbit</button>
      </form>
    </div>
  );
}

export default WishlistForm;
