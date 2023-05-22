import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from "../assets/R.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage:`url(${BannerImage})`}}>
        <div className="headerContainer">
            <p>Are u HUNGRY</p>
            <h2>DON'T WAIT</h2>
            <Link to ="/menu">
            <button>Order Now</button>
            </Link>
        </div>
    </div>

  )
}

export default Home;