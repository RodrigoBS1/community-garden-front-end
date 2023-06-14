// import React, { useState, useEffect } from 'react';
// import '../Article.css';

// const Card = ({ title, image, links }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = (event, url) => {
//     event.preventDefault();
//     window.open(url, '_blank');
//   };

//   const cardStyle = {
//     backgroundImage: `url(${image})`,
//   };

//   return (

//     <div
//       className={`card ${isFlipped ? 'flipped' : ''}`}
//       onClick={() => setIsFlipped(!isFlipped)}
//       >

//     <a
//       href={links.trim()}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`card ${isFlipped ? 'flipped' : ''}`}
//       onClick={(event) => handleClick(event, links.trim())}

//     />
//       <div className="card-front" style={cardStyle}></div>
//       <div className="card-back">
//         <h3 className="card-title">{title}</h3>

//         <div className="card-links-container">
//           {links.map((link, index) => (
//             <a
//               key={index}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="card-link"
//               onClick={(event) => handleClick(event, link)}
//             >
//               Link {index + 1}
//             </a>
//           ))}
//         </div>

//         <ul className="card-links">
//           {Array.isArray(links) &&
//             links.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.trim()}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={(event) => handleClick(event, link.trim())}
//                 >
//                   Link {index + 1}
//                 </a>
//               </li>
//             ))}
//         </ul>

//       </div>
//     </div>
//   );
// };

// const Articles = () => {
//   const [articlesData, setArticlesData] = useState([]);

//   useEffect(() => {
//     const articles = [
//       {
//         title: "Indoor Plants",
//         image: "https://i.ibb.co/5cWYymL/indoor-plants.jpg",
//         links: [
//           "https://kealakai.byuh.edu/indoor-plants-boost-your-homes-air-quality-lowers-stress-say-experts-and-improves-mood",
//           "https://www.ambius.com/blog/the-ultimate-guide-to-indoor-plants/",
//           "https://bloomboxclub.com/blogs/news/interesting-facts-about-indoor-plants-you-need-to-know",
//           "https://www.goodhousekeeping.com/home/gardening/advice/g1285/hard-to-kill-plants/"
//         ]
//       },
//       {
//         title: "Outdoor Plants",
//         image: "https://i.ibb.co/CBDyHSh/outdoor-plants.jpg",
//         links: [
//           "https://www.realsimple.com/home-organizing/gardening/outdoor/impossible-to-kill-outdoor-plants",
//           "https://www.bobvila.com/articles/watering-plants/",
//           "https://www.masterclass.com/articles/how-to-keep-plants-alive",
//           "https://www.almanac.com/soil-preparation-how-do-you-prepare-garden-soil-planting"
//         ]
//       },
//       {
//         title: "Year Round Plants",
//         image: "https://i.ibb.co/rKjxfv3/year-round-plants.jpg",
//         links: [
//           "https://www.finegardening.com/project-guides/container-gardening/10-plants-for-year-round-containers",
//           "https://www.nytimes.com/2021/02/03/realestate/the-year-round-garden.html",
//           "https://www.realsimple.com/home-organizing/gardening/outdoor/garden-that-blooms-year-round",
//           "https://savvygardening.com/new-plants/"
//         ]
//       },
//       {
//         title: "Seasonal Plants",
//         image: "https://i.ibb.co/1dGDhcF/flowers-and-seasons.jpg",
//         links: [
//           "https://www.planteriagroup.com/blog/importance-seasonal-flowers/",
//           "https://www.sciencedirect.com/science/article/pii/S0960982219315143",
//           "https://bio.libretexts.org/Bookshelves/Botany/Red_Seal_Landscape_Horticulturist_Identify_Plants_and_Plant_Requirements_II_(Nakano)/Part_04_Plants_for_Horticultural_Applications/02.2%3A_Seasonal_Plants",
//           "https://deckers-nursery.com/garden-learning-center/the-ultimate-guide-to-seasonal-flowers/"
//         ]
//       }

//     ];

//     setArticlesData(articles);

//     };

//     fetchArticlesData();

//   }, []);

//   return (
//     <div>
//       <h1 className="articles-title">Articles</h1>
//       <div className="articles-container">
//         {articlesData.map((article, index) => (
//           <div key={index} className="article-card">
//             <h3 className="card-title">{article.title}</h3>

//             <Card
//               title={article.title}
//               image={article.image}
//               links={article.links}
//             />

//             <Card title={article.title} image={article.image} links={article.link} />

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Articles;
