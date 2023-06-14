import React from 'react';
import { useLocation } from 'react-router-dom';

const Statements = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="intro">
      <h1 className="welcome">Welcome to The Community Garden</h1>
      {isHomePage && (
        <h2 className="mission">
          "Our mission is to help communities with food insecurities have access to healthy produce. Together we can cultivate a
          thriving and sustainable community through the power of gardening, fostering social connections, promoting healthy
          lifestyles, and nurturing environmental stewardship."
        </h2>
      )}
    </div>
  );
};

export default Statements;
