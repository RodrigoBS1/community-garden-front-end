import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FallFruits from '../images/FallFruits.jpeg';
import SpringFruits from '../images/SpringFruits.jpeg';
import WinterFruits from '../images/WinterFruits.jpeg';
import SummerFruits from '../images/SummerFruits.jpeg';
import GardenArticle from '../images/GardenArticle.jpeg';
// import GardeningForum from '../images/GardeningForum.jpeg';
function GeneralCarousel() {
 const [index, setIndex] = useState(0);
 const findSeason = (index) => {
  return imgCards[mod(index, imgCards.length)].season;
 };
 const imgCards = [
  { id: '1', image: FallFruits, season: 'Fall' },
  { id: '2', image: WinterFruits, season: 'Winter' },
  { id: '3', image: SummerFruits, season: 'Summer' },
  { id: '4', image: SpringFruits, season: 'Spring' },
  { id: '5', image: GardenArticle, season: 'Garden' },
  // { id: '6', image: GardeningForum },
 ];
 const mod = (n, m) => {
  let result = n % m;
  // Return a positive value
  return result >= 0 ? result : result + m;
 };
 useEffect(() => {
  const timeoutId = setTimeout(() => {
   setIndex((prevIndex) => (prevIndex + 1) % imgCards.length);
  }, 3000);
  return () => clearTimeout(timeoutId); // Clean up the timer on component unmount
 }, [index,imgCards.length]);
 return (
  <div className='MainCar'>
   <div className='carousel1'>
    {imgCards.map((item, i) => {
     const indexLeft = mod(index - 1, imgCards.length);
     const indexRight = mod(index + 1, imgCards.length);
     let className = '';
     if (i === index) {
      className = 'Gencard Gencard--active';
     } else if (i === indexRight) {
      className = 'Gencard Gencard--right';
     } else if (i === indexLeft) {
      className = 'Gencard Gencard--left';
     } else {
      className = 'Gencard';
     }
     return (
      <Link
       to={{ pathname: '/seasoninfo', state: { season: findSeason(i) } }}
       key={item.id}
      >
       <img className={className} src={item.image} alt={item.season} />
      </Link>
     );
    })}
   </div>
  </div>
 );
}
export default GeneralCarousel;





















