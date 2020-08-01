import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function Menu(props) {
  return (
    <section className= "section-menu">
      <ul className="menu-list">
        <li className="menu-item"><Link to={`/`}><i className="fa fa-home"></i>Home</Link></li>
        <li className="menu-item"><Link to={`/`}><i className="fa fa-arrow-up"></i>Trend</Link></li>
        <li className="menu-item"><Link to={`/`}><i className="fa fa-users"></i>Group</Link></li>
        <li className="menu-item"><Link to={`/`}><i className="fa fa-star"></i>Entertainment</Link></li>
      </ul>
    </section>
  )
}
export default Menu;
