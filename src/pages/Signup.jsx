// import React from "react";
import RegisterForm from "../components/Forms/FormRegister/FormRegister";
import "../styles/register.css";

const Signup = () => {
  return (
    <>

    <section>
      <div className="register">
        <h3>Sign Up</h3>
        <RegisterForm />
      </div>
    </section>
    </>
  );
};

export default Signup;
