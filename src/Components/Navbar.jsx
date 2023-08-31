import React from "react";
import img from '../Assets/Ellipse 1.png'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" id="logo">
        colorpress
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="nav-form">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Find Product"
            aria-label="Search"
          />
        </form>
        <ul class="navbar-nav mr-auto" id="navl">
          <li class="nav-item active">
            <a class="nav-link" href="#">
            <Link to='/'>  Home <span class="sr-only">(current)</span></Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">

            <Link to='/productpage'> Products</Link>

              
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <Link to='/myorder'> MyOrder</Link>

              
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Review
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
             <img className="profile" src={img}/>
            </a>
          </li>
     
      
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
