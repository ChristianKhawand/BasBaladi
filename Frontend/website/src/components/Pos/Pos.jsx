import React from 'react';
import './Pos.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Pos = () => {
  return (
    <div className="poscontainer">
      <h1 className="posh1">Products of the season</h1>

      <div className="posgallery-wrap">
        <div className="positem positem-1"></div>
        <div className="positem positem-2"></div>
        <div className="positem positem-3"></div>
        <div className="positem positem-4"></div>
        <div className="positem positem-5"></div>
      </div>
      <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
        <button className="posbutton">More</button>
      </Link>
      
    </div>
  );
};

export default Pos;