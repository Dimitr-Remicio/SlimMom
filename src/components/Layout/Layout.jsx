// import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import BackAnimated from "../BackAnimated/BackAnimated";
// import Background from "../../components/Background/Background";
import Container from "../Container/Container";
import authSelector from "../../redux/auth/selectors";

const Layout = () => {
  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <>
      <Header />

      {userIsLoggedIn ? (
        <div
          className="Layout"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Container>
            {userIsLoggedIn ? null : <BackAnimated />}
            <div
              style={{
                position: "relative",
                zIndex: "10",
                backgroundColor: "#FFFFFF",
                width: "auto",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 70%)",
              }}
            >
              <Routers />
            </div>
          </Container>
        </div>
      ) : (
        <div
          className="Layout"
          style={{ display: "flex", alignItems: "center", margin: "0auto" }}
        >
          <Container>
            {/* {userIsLoggedIn ? null : <BackAnimated />} */}
            <div
              style={{
                position: "relative",
                zIndex: "10",
                backgroundColor: "#FFFFFF",
                width: "auto",
                background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 70%)",
              }}
            >
              <Routers />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Layout;
