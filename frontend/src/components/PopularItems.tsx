import React from "react";
import "../styles/popularItems.css";
import data from "../data/dishes.json";

interface PopularItemsProps {
  openModal: () => void;
}

const PopularItems: React.FC<PopularItemsProps> = ({ openModal }) => {
  const popular = data.popularItems;

  return (
    <section className="popular-items">
      <h2>Popular Items</h2>
      <div className="carousel">
        <button className="arrow">&#8592;</button>
        <div className="carousel-track">
          {popular.map((dish) => (
            <div className="dish-card" key={dish.id}>
              <img src={dish.image} alt={dish.name} />
              <p>{dish.name}</p>
              <span>&#8377;{dish.price}</span>
            </div>
          ))}
        </div>
        <button className="arrow">&#8594;</button>
      </div>
      <div className="request-wrap">
        <button className="request-btn" onClick={openModal}>
          Request a Dish
        </button>
      </div>
    </section>
  );
};

export default PopularItems;
