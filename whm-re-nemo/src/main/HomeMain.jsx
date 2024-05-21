import { NavLink } from "react-router-dom";
import "../css/Home.css";

const HomeMain = () => {
  return (
    <section className="home-section">
      <div className="home-picture">
        <NavLink to="/game/LEVEL3"></NavLink>
        <NavLink to="/game/LEVEL4"></NavLink>
      </div>
      <div className="home-picture">
        <NavLink to="/game/LEVEL1"></NavLink>
        <NavLink to="/game/LEVEL2"></NavLink>
      </div>
    </section>
  );
};

export default HomeMain;
