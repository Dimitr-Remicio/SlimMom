import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";
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

import {
  Cut,
  Form,
  Error,
  InputBlock,
} from "./RegisterForm.styled";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const passwordRules =
    /^(?=.*[a-zà-ÿ])(?=.*[A-ZÀ-ß])(?=.*\d)[a-zà-ÿA-ZÀ-ß\d]{8,50}$/;
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
        "Minimum 8 characters: lowercase/uppercase Latin letters and numbers"
      )
      .max(50, "¡Must be 50 characters or less!")
      .matches(
        passwordRules,
        "Minimum 8 characters: lowercase/uppercase Latin letters and numbers"
      )
      .required("Required field"),
  });

  const dispatch = useDispatch();
  const authUserParams = useSelector(calcSelectors.getUserInfo);

  return (
    <section>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validateOnBlur
        onSubmit={(values, actions) => {
          authUserParams.height === null || authUserParams.age === null
            ? dispatch(authOperations.register(values))
            : dispatch(
                authOperations.register({ ...values, ...authUserParams })
              );
          actions.resetForm();
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
          <Form onSubmit={handleSubmit}>
            <InputBlock>
              <TextField
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
              <Cut></Cut>
              {touched.name && errors.name && <Error>{errors.name}</Error>}
            </InputBlock>
            <InputBlock>
              <TextField
                sx={{ width: "25ch", "& label": { letterSpacing: "1px" } }}
                id="standard-basic"
                label="Email *"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                variant="standard"
              />

              {touched.email && errors.email && <Error>{errors.email}</Error>}
            </InputBlock>

            <InputBlock>
              <FormControl
                color="warning"
                sx={{ width: "25ch" }}
                variant="standard"
              >
                <InputLabel
                  className="input__login"
                  htmlFor="standard-adornment-password"
                  style={{ letterSpacing: "1px" }}
                >
                  Password*
                </InputLabel>
                <Input
                  color="warning"
                  focused="true"
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
            </InputBlock>

            <Stack direction="row" spacing={2}>
              <Button
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

              <NavLink to="/SlimMom/login">
                <Button
                  style={{
                    border: "3px solid #FC842D",
                    color: "#FC842D",
                    padding: "15px 25px",
                    width: "15rem",
                    borderRadius: "20em",
                    fontFamily: "Verdana bold",
                    textTransform: "none",
                    textAlign: "center",
                  }}
                  variant="outlined"
                >
                  Login
                </Button>
              </NavLink>
            </Stack>
          </Form>
        )}
      </Formik>
      <ToastContainer
        style={{ top: "2%" }}
        toastStyle={{
          width:"500px",
          border: "1px solid #FC842D",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
          textAlign: "center",
        }}
      />
    </section>
  );
}
