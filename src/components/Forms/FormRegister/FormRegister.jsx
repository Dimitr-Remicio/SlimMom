import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import authOperations from "../../../redux/auth/authOperations";
import calcSelectors from "../../../redux/calculatorSlice/calculatorSelectors";
import InputAdornment from "@mui/material/InputAdornment";

import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import "./FormRegister.css";


export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/;
  const emailRules = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{1,6}$/i;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "¡Must be 3 characters or more!")
      .max(50, "¡Must be 50 characters or less!")
      .required("Required field"),
    email: yup
      .string()
      .matches(emailRules, "Invalid email address. Example: email@gmail.com")
      .min(3, "¡Must be 3 characters or more!")
      .max(254, "¡Must be 254 characters or less!")
      .required("Required field"),
    password: yup
      .string()
      .min(
        8,
        "Minimum of 8 characters: lower/upper case, numbers and symbols(@#$%^&+=!)"
      )
      .max(50, "¡Must be 50 characters or less!")
      .matches(
        passwordRules,
        "Minimum of 8 characters: lower/upper case, numbers and symbols(@#$%^&+=!)"
      )
      .required("Required field"),
  });

  const dispatch = useDispatch();
  const authUserParams = useSelector(calcSelectors.getUserInfo);

  const nav = useNavigate();

  function userRegister() {
    setTimeout(() => {
      nav("/login");
    }, 1000);
  }

  return (
    <div className="wrapper">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnBlur
        onSubmit={(values, actions) => {
          authUserParams.height === null || authUserParams.age === null
            ? dispatch(authOperations.register(values))
            : dispatch(
                authOperations.register({ ...values, ...authUserParams })
              );
          actions.resetForm();
          userRegister();
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            id="FormSignup"
            onSubmit={handleSubmit}
          >
            <div className="inputBlock">
              <TextField
                className="SignupInput"
                sx={{ width: "25ch", "& label": { letterSpacing: "1px" } }}
                id="standard-basic"
                label="Name*"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                variant="standard"
              />
              {touched.name && errors.name && <div className="errorlabel">{errors.name}</div>}
            </div>
            <div className="inputBlock">
              <TextField
                sx={{ width: "25ch", "& label": { letterSpacing: "1px" } }}
                id="standard-basic"
                className="SignupInput"
                label="Email *"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                variant="standard"
              />

              {touched.email && errors.email && <div className="errorlabel">{errors.email}</div>}
            </div>

            <div className="inputBlock">
              <FormControl
                className="SignupInput"
                color="warning"
                sx={{ width: "25ch" }}
                variant="standard"
              >
                <InputLabel
                  className="input__register"
                  htmlFor="standard-adornment-password"
                  style={{ letterSpacing: "1px" }}
                >
                  Password*
                </InputLabel>
                <Input
                  color="warning"
                  focused="true"
                  className="SignupInput"

                  id="standard-adornment-password"
                  label="Password *"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {touched.password && errors.password && (
                <div className="errorlabel">{errors.password}</div>
              )}
            </div>

            <div className="inputBlock">
              <FormControl
                color="warning"
                className="SignupInput"
                sx={{ width: "25ch" }}
                variant="standard"
              >
                <InputLabel
                  className="input__register"
                  htmlFor="standard-adornment-password"
                  style={{ letterSpacing: "1px" }}
                >
                  Confirm Password*
                </InputLabel>
                <Input
                  color="warning"
                  focused="true"
                  id="standard-adornment-password"
                  label="confirmPassword *"
                  name="confirmPassword"
                  className="SignupInput"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {touched.password && errors.password && (
                <div className="errorlabel">{errors.password}</div>
              )}
            </div>

            <Stack className="contButton" >
              <Button
                id="signup"
                className="signupInvert"
                style={{
                  backgroundColor: "#FC842D",
                  padding: "15px 25px",
                  width: "10rem",
                  borderRadius: "20em",
                  fontFamily: "Verdana bold",
                  textTransform: "none",
                }}
                variant="contained"
                type="submit"
              >
                Sign up
              </Button>

              <NavLink to="/login">
                <Button
                  className="loginInvert"
                  style={{
                    border: "3px solid #FC842D",
                    color: "#FC842D",
                    padding: "15px 25px",
                    width: "15rem",
                    borderRadius: "20em",
                    fontFamily: "Verdana bold",
                    textTransform: "none",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.88)",

                  }}
                  variant="outlined"
                >
                  Login
                </Button>
              </NavLink>
            </Stack>
          </form>
        )}
      </Formik>
      
    </div>
  );
}
