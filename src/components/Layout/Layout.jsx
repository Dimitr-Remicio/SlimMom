import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import Background from "../Background/Background";

const Layout = () => {
  return (
    <>
      <Header />
      <Background/>
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
