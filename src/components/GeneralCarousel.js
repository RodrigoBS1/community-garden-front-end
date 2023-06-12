import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FallCrop2 from '../images/FallCrop2.jpeg';
import SpringCrop2 from '../images/SpringCrop2.jpeg';
import WinterCrop2 from '../images/WinterCrop2.jpeg';
import SummerCrop2 from '../images/SummerCrop2.jpeg';

function GeneralCarousel() {
  const [index, setIndex] = useState(0);
  const imgCards = [
    { id: '1', image: FallCrop2, season: 'Fall', },
    { id: '2', image: WinterCrop2, season: 'Winter', },
    { id: '3', image: SummerCrop2, season: 'Summer', },
    { id: '4', image: SpringCrop2, season: 'Spring', },
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
  }, [index, imgCards.length]);

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
            <Link to={`/seasoninfo/${item.season}`} key={item.id}>
              <div className="image-container">
                <img className={className} src={item.image} alt={item.season} />
                <div className="image-text">{item.text}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default GeneralCarousel;
