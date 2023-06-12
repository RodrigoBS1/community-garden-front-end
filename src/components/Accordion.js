import React, { useState } from 'react';
function Accordion({ items }) {
   const [activeIndex, setActiveIndex] = useState(-1);
   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
   };
   return (
      <div className='accord' >
         {items.map((item, index) => (
            <div key={item.title}>
               <button onClick={() =>handleClick(index)}>{item.title}</button>
               {index === activeIndex && <p>{item.content}</p>}
            </div>
         ))}
      </div>
   );
}
export default Accordion;