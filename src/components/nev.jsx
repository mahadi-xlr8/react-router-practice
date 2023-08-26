import React, { Component } from "react";
import { Link } from "react-router-dom";

const Nev = (props) => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/*">not Found</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nev;
