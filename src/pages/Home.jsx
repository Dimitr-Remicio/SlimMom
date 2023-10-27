import React from "react";
import FormHome from "../components/FormHome/FormHome";
import Button from "@mui/material/Button";

import BackAnimated from "../components/BackAnimated/BackAnimated";

import "../styles/Home.css";

// import { Button } from "@mui/base";

const Home = () => {
  return (
      <section>
        {/* <BackAnimated />   */}
        <div className="Home">
          <h1>Calculate your daily calorie intake right now</h1>
          <FormHome />
          <Button
            style={{
              backgroundColor: "#FC842D",
              padding: "15px 20px",
              width:"18rem",
              borderRadius: "20em",
              fontFamily: "Verdana bold",
              textTransform: "none",
            }}
            variant="contained"
            href="#contained-buttons"
          >
            Start losing weight
          </Button>
        </div>
      </section>
  );
};

export default Home;
