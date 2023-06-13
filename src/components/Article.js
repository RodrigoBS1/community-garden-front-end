import React, { useState, useEffect } from 'react';
import '../Article.css';

const Card = ({ title, image, links }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <a
      href={links.trim()}
      target="_blank"
      rel="noopener noreferrer"
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={(event) => handleClick(event, links.trim())}
    >
      <div className="card-front" style={cardStyle}></div>
      <div className="card-back" style={cardStyle}>
        <h3 className="card-title">{title}</h3>
        <ul className="card-links">
          {Array.isArray(links) &&
            links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => handleClick(event, link.trim())}
                >
                  Link {index + 1}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </a>
  );
};

const Articles = () => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        const response = await fetch('https://community-garden-api.onrender.com/articles');
        const data = await response.json();
        setArticlesData(data);
      } catch (error) {
        console.error('Error fetching articles data:', error);
      }
    };

    fetchArticlesData();
  }, []);

  return (
    <div>
      <h1 className="articles-title">Articles</h1>
      <div className="articles-container">
        {articlesData.map((article) => (
          <div key={article.id} className="article-card">
            <h3 className="card-title">{article.title}</h3>
            <Card title={article.title} image={article.image} links={article.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
