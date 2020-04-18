import React from "react";
import logo from '../Trello_logo.png';
import '../css/nav.css'
function Nav(props) {
  const { value } = props;
  return (
    <nav className="navbar navbar-light bg-dark">
      {value === 'header' ?
      <a className="navbar-brand" href="../public/index.html">
        <img src={logo} width="60" height="50" alt="trello logo" />
      </a>
      : <p className = "text-white">{value}</p> }
    </nav>
  );
}

export default Nav