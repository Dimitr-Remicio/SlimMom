import PropTypes from "prop-types";
import s from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <>
      <div className={s.container}>{children}</div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
