// import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Container, Row } from "reactstrap";
import Container from "../Container/Container";

import sprite from "../../assets/sprite.svg";
import authSelector from "../../redux/auth/selectors";

const Header = () => {

  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);
  let nav__links = [];
  let home = "";

  {userIsLoggedIn ? nav__links = [
    {
      path: "/SlimMom/diary",
      display: "Diary",
    },
    {
      path: "/SlimMom/calculator",
      display: "Calculator",
    },
  ]
  :  nav__links = [
    {
      path: "/SlimMom/login",
      display: "Login",
    },
    {
      path: "/SlimMom/signup",
      display: "Signup",
    },
  ]
 }
 
 {userIsLoggedIn ? home = "/SlimMom/diary"
:  home = "/SlimMom"
}

  return (
    <header className="header">
      <Container>
        <div className="logo">
          <div className="nav__wrapper">
            <div className="logo__cont">
              <NavLink style={{height:"10px"}} to={home}>
                <svg className="" viewBox="0 0 20 20" width="55">
                  <use href={sprite + "#logo"}></use>
                </svg>
                <svg className="" viewBox="0 0 20 20" width="50">
                  <use href={sprite + "#slimLogo"}></use>
                </svg>
                <svg className="" viewBox="0 0 20 20" width="55">
                  <use href={sprite + "#momLogo"}></use>
                </svg>
              </NavLink>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li key={index} className="nav__item ">
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
