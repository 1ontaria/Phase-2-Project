import React, { useState, useEffect } from "react";
import VisionItem from "./VisionItem";

function MainContainer() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/wishlist")
      .then((resp) => resp.json())
      .then((wishlist) => setWishlist(wishlist));
  }, []);

  return (
    <div>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            <VisionItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainContainer;
