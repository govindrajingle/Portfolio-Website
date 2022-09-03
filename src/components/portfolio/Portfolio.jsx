import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";

const Portfolio = () => {
  return (
    <section id="porttlio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="React Web Image" />
          </div>
          <h3>React Website</h3>
          <a
            href="https://github.com/govindrajingle/portfolio-website"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
