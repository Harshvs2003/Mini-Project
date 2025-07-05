import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">FastMeals</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Authentic Home food in India</h1>
          <p>Delicious, fresh & homemade. Explore kitchens near you.</p>
          <input
            type="text"
            placeholder="Enter your location"
            className="location-input"
          />
        </div>
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922522.png"
            alt="Chef"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
