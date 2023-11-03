import React from "react";

import "../styles/login.css";
import LoginForm from "../components/Forms/FormLogin/FormLogin";

const Login = () => {
  return (
    <>
      <section>
        <div className="Login">
          <h3
            style={{
              color: "#FC842D",
            }}
          >
            Log In
          </h3>

          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Login;
