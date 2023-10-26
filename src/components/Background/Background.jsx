import React from "react";
import "./Background.css";
import { ASSETS_DIR } from "../../enviroments/dev";

const Background = () => {
  return (
    <>
      <div>
        <img
          src={ASSETS_DIR + "/assets/images/bgPattern-banana.png"}
          className="bg__banana"
          alt=""
        />
        <img
          src={ASSETS_DIR + "/assets/images/bgPattern-leaf.png"}
          className="bg__leaf"
          alt=""
        />
        <img
          src={ASSETS_DIR + "/assets/images/bgPattern-strawberry.png"}
          className="bg__berry"
          alt=""
        />
        <img
          src={ASSETS_DIR + "/assets/images/bgFrameStain.png"}
          className="bg__stain"
          alt=""
        />
      </div>
    </>
  );
};

export default Background;
