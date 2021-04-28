import React from "react";
import logoSrc from "./images/ezone-logo.svg";
import burgerSrc from "./images/burger.svg";
import astralisSrc from "./images/astralis.svg";
import arenaSrc from "./images/arena.png";
import pillSrc from "./images/pills.svg";
import pillgSrc from "./images/pillsgray.svg";
import quoteSrc from "./images/quotes.svg";
const Homepage = () => {
  return (
    <main>
      <header className="header">
        <img className="logo" src={logoSrc} alt="little monkey" />
        <span>
          MENU
          <img className="burger" src={burgerSrc} alt="burger menu" />
        </span>
      </header>
      <img className="purple-pill" src={pillSrc} alt="outlined pills" />
      <img className="gray-pill" src={pillgSrc} alt="outlined pills" />
      <section className="hero">
        <div className="astralis-container">
          <img src={astralisSrc} alt="logo of Astralis, a CS:Go team" />
          <h3 className="astralis-text">
            <span className="from-founders">
              From the <br />
              founders of
            </span>
            <span className="astralis">ASTRALIS</span>
          </h3>
        </div>
        <h2>
          <span className="outline">ELEVATE YOUR</span>
          <br />
          <span>PERFORMANCE</span>
        </h2>
        <button className="button">GET IN THE ZONE</button>
        <span className="perks">
          FREE-TO-USE<span>|</span>CURATED CONTENT<span>|</span>
          NO-STRINGS-ATTACHED
        </span>
        {/*  <button className="button button--green">Badgert</button>
        <button className="button button--primary">Badget</button> */}
      </section>
      <section className="performance">
        <h2>Performance-based research and knowledge for esports athletes.</h2>
        <span className="perks">
          We are An independent collective of performance experts, and we want
          to help you push your boundaries and challenge your limits.
        </span>
        <img src={arenaSrc} alt="" />
      </section>
      <section className="quote-cta">
        <div className="quote">
          <img
            className="quotation-marks"
            src={quoteSrc}
            alt="quotation marks"
          />
          <span className="frederik">
            Frederik <br />
            Byskov
          </span>
          <span className="co-founder">Co-founder of Astralis</span>
          <div className="square"></div>
          <blockquote className="citation">
            Ezone is a free-to-use, non-payment, no-strings-attached platform
            where we provide performance-based research and knowledge in an
            actionable way.
          </blockquote>
        </div>
        <div className="cta">
          <h2>Elevate and level up your game, off the server!</h2>
          <button className="button">Get in the zone</button>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
