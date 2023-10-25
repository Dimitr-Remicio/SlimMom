import React from 'react';
import "./header.css";
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import logo from '../../assets/logo.png';

const Header = () => {

  const nav__links =[
    {
      path: '/SlimMom/login',
      display: 'Login'
    },
    {
      path: '/SlimMom/signup',
      display: 'Signup'
    },
  ]
  return (
    <header className='header'>
          <div className='logo'>
            <div className='nav__wrapper'>
            <img src={logo} alt="" />

            <div className='navigation'>
                <ul className="menu">
                 {
                  nav__links.map((item, index) => (
                    <li key={index} className="nav__item">
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                  ))
                 }
                </ul>
            </div>
            </div>
          </div>
    </header>
  )
}

export default Header