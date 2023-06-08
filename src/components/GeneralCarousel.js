import { useEffect, useState } from "react";
import FallFruits from "../images/FallFruits.jpeg";
import SpringFruits from "../images/SpringFruits.jpeg";
import WinterFruits from "../images/WinterFruits.jpeg";
import SummerFruits from "../images/SummerFruits.jpeg";
import GardenArticle from "../images/GardenArticle.jpeg";
// import GardeningForum from "../image/GardeningForum.jpeg";

function GeneralCarousel() {
  const [index, setIndex] = useState(0);

  const imgCards = [
    { id: "1", image: FallFruits },
    { id: "2", image: WinterFruits },
    { id: "3", image: SummerFruits },
    { id: "4", image: SpringFruits },
    { id: "5", image: GardenArticle },
    // { id: "6", image: GardeningForum },


  ];

  const mod = (n, m) => {
    let result = n % m;
    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % imgCards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  return (
    <div className="MainCar">
      <div className="carousel1">
        {/* <img className="Gencard Gencard--active" src={FallFruits} alt="Fall" />
        <img className="Gencard Gencard--left" src={WinterFruits} alt="Winter" />
        <img className="Gencard Gencard--center" src={SummerFruits} alt="Summer" />
        <img className="Gencard Gencard--right" src={SpringFruits} alt="Spring"/> */}

        {imgCards.map((item, i) => {
          const indexLeft = mod(index - 1, imgCards.length);
          const indexRight = mod(index + 1, imgCards.length);

          let className = "";

          if (i === index) {
            className = "Gencard Gencard--active";
          } else if (i === indexRight) {
            className = "Gencard Gencard--right";
          } else if (i === indexLeft) {
            className = "Gencard Gencard--left";
          } else className = "imgCards";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt=""
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default GeneralCarousel;
