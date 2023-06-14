import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Article.css';

const Card = ({ title, image, links }) => {
  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="card" onClick={(e) => handleClick(e, links[0])}>
      <div className="card-front" style={cardStyle}></div>
      <div className="card-back">
        <h3 className="card-title">{title}</h3>
        <ul className="card-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Link {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Articles = () => {
  const location = useLocation();

  const articlesData = [
    {
      title: "Easiest Vegetables To Grow",
      image: "https://i.ibb.co/4FPKF5g/cg13.jpg",
      links: ["https://www.almanac.com/content/10-easy-vegetables-grow-seed"],
    },
    {
      title: "Ten Worst Popular Foods",
      image: "https://i.ibb.co/bK1fnMY/cg2.jpg",
      links: ["https://youmatter.world/en/10-worst-popular-foods/"],
    },
    {
      title: "Fastest Growing Vegetables",
      image: "https://i.ibb.co/xFcZHQW/cg1.jpg",
      links: [
        "https://parkseed.com/fastest-growing-vegetables/a/fastest-growing-vegetables/",
      ],
    },
    {
      title: "Grow Your Own Food 101",
      image: "https://i.ibb.co/WGZ3mrK/cg7.jpg",
      links: ["https://foodprint.org/growing-your-own-food/"],
    },
  ];

  // Check if the location is the home page
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {isHomePage && <h1 className="articles-title">Articles</h1>}
      {isHomePage && (
        <div className="articles-container">
          {articlesData.map((article, index) => (
            <div key={index} className="article-card">
              <h3 className="card-title">{article.title}</h3>
              <Card
                title={article.title}
                image={article.image}
                links={article.links}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Articles;
