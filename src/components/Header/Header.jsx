// import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Container, Row } from "reactstrap";
import Container from "../Container/Container";
import sprite from "../../assets/sprite.svg";
import authSelector from "../../redux/auth/selectors";
import UserBar from "../UserMenu/UserMenu";
import "./HeaderMobile.css";

const Header = () => {
  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);
  let nav__links = [];
  let nav__links2 = [];
  let home = "";

  function btnonclick() {
    const burgerBtn = document.getElementById("burger-container");

    burgerBtn.classList.contains("normal")
      ? burgerBtn.classList.add("active")
      : burgerBtn.classList.remove("normal");

    // burgerBtn.classList.replace("active", "normal");
    // }
  }

  function openMod() {
    const state = document.getElementById("statedetail");
    state.classList.add("open-details");
    state.classList.remove("hidde");
    state.classList.add("show");
  }
  function HiddeItem() {
    let statecont = document.getElementById("statedetail");

    statecont.classList.remove("open-details");
    statecont.classList.add("hidde");

    statecont.classList.remove("show");
  }

  {
    userIsLoggedIn
      ? (nav__links = [
          {
            path: "/SlimMom/diary",
            display: "Diary",
          },
          {
            path: "/SlimMom/calculator",
            display: "Calculator",
          },
        ])
      : (nav__links = [
          {
            path: "/SlimMom/diary",
            display: "Diary",
          },
          {
            path: "/SlimMom/calculator",
            display: "Calculator",
          },
          {
            path: "/SlimMom/login",
            display: "Login",
          },
          {
            path: "/SlimMom/signup",
            display: "Signup",
          },
        ]);
  }
  {
    userIsLoggedIn
      ? (nav__links2 = [
          {
            path: "/SlimMom/diary",
            display: "Diary",
          },
          {
            path: "/SlimMom/calculator",
            display: "Calculator",
          },
        ])
      : (nav__links2 = [
          // {
          //   path: "/SlimMom/diary",
          //   display: "Diary",
          // },
          {
            path: "/SlimMom/home",
            display: "Home",
          },
          {
            path: "/SlimMom/diary",
            display: "Diary",
          },
          {
            path: "/SlimMom/calculator",
            display: "Calculator",
          },

          {
            path: "/SlimMom/login",
            display: "Login",
          },
          {
            path: "/SlimMom/signup",
            display: "Signup",
          },
        ]);
  }

  {
    userIsLoggedIn ? (home = "/SlimMom/calculator") : (home = "/SlimMom");
  }

  return (
    <>
      <header className="header">
        <Container>
          <div className="logo">
            <div className="nav__wrapper">
              <div className="nav">
                <div className="logo__cont">
                  <NavLink style={{ height: "10px" }} to={home}>
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
                <div className="logo__cont2">
                  <NavLink style={{ height: "10px" }} to={home}>
                    <svg
                      className=""
                      viewBox="0 0 20 20"
                      width="55"
                      height="50"
                    >
                      <use href={sprite + "#logo"}></use>
                    </svg>
                  </NavLink>
                </div>
                <div className="navigation">
                  <button className="menubtn" onClick={openMod}>
                    {/* hello */}
                    <svg className="" viewBox="0 0 10 20">
                      <use href={sprite + "#icon-menu"}></use>
                    </svg>
                  </button>

                  <ul className="menu">
                    {nav__links.map((item, index) => (
                      <li key={index} className="nav__item ">
                        <NavLink to={item.path}>{item.display}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <UserBar />
            </div>
          </div>
        </Container>
      </header>
      <div className="HeaderMenu hidde" id="statedetail">
        <div id="contMenu">
          <button onClick={HiddeItem} className="menubtn btn" >
            {/* hello */}
            <svg className="" viewBox="3 2 24 24">
              <use href={sprite + "#icon-x"}></use>
            </svg>
          </button>
          <ul className="menuMobile">
            {nav__links2.map((item, index) => (
              <li key={index} onClick={HiddeItem} className="nav__item ">
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
