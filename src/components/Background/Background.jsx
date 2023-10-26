import React from "react";
import "./Background.css";
import { PUBLIC_DIR } from "../../enviroments/dev";

const Background = () => {
  return (
    <>
      <div>
        <img
          src="/images/image.jpg"
          className="bg__banana"
          alt=""
        />
        <img
          src="/assets/images/bgPatternLeaf.png"
          className="bg__leaf"
          alt=""
        />
        <img
          src="/public/assets/images/bgPatternStrawberry.png"
          className="bg__berry"
          alt=""
        />
        <img
          src="/src/assets/images/bgFrameStain.png"
          className="bg__stain"
          alt=""
        />
      </div>
    </>
  );
};

export default Background;
