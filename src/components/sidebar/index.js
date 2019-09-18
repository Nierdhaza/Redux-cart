import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom'


export const SideBar = () => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
    <NavLink to="/product-list" activeStyle={{ color: 'gold' }}>Product list</NavLink>
    <NavLink to="/cart"activeStyle={{ color: 'gold' }}>Cart</NavLink>

    </nav>
  </div>);
};

export default SideBar;