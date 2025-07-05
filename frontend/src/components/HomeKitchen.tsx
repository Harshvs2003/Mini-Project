import "../styles/homeKitchen.css";
import data from "../data/dishes.json";

const HomeKitchen = () => {
  const dishes = data.homeKitchenDishes;

  return (
    <section className="home-kitchen">
      <h2>Home Kitchen</h2>
      <div className="dish-grid">
        {dishes.map((dish) => (
          <div className="dish-card" key={dish.id}>
            <img src={dish.image} alt={dish.name} />
            <div className="dish-info">
              <p>{dish.name}</p>
              <span>&#8377;{dish.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeKitchen;
