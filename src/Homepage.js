import React from "react";
import logoSrc from "./images/games/valorant.png";

const Homepage = () => {
  return (
    <main>
      <header className="header">Logo, menu</header>
      <section className="hero">
        <h2>
          ELEVATING PERFORMANCE
          <br />
          <span className="outline">IN ESPORTS ATHELTES</span>
        </h2>
        <img src={logoSrc} alt="little monkey" />
        <button className="button">Badgert</button>
        <button className="button button--green">Badgert</button>
        <button className="button button--primary">Badget</button>
      </section>
    </main>
  );
};

export default Homepage;
