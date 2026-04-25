import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="magic__nav">
        <div className="nav__logo">THE PENSIEVE</div>
        <div className="nav__links">
            <Link to="/">HOME</Link>
            <Link to="/library">LIBRARY</Link>
            <Link to="/houses">HOUSES</Link>
        </div>
        <button className="lumos__btn">LUMOS</button>
    </nav>
  );
};


export default Navbar
