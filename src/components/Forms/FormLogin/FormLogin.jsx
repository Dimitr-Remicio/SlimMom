import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import authOperations from "../../../redux/auth/authOperations";
import {
  Wrapper,
  // Title,
  FormLogin,
  // WrapperInputs,
  // Input,
  InputBlock,
  // Label,
  // WrapperInputEmail,
  // WrapperInputPassword,
  // WrapperButtons,
  Error,
  // WrapperImage,
  // Image,
} from "./FormLogin.styled";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


// import Input from "@mui/material/Input";
// import Button from "@mui/material/Button";

const passwordRules =
  /^(?=.*[a-zà-ÿ])(?=.*[A-ZÀ-ß])(?=.*\d)[a-zà-ÿA-ZÀ-ß\d]{8,50}$/;
const emailRules = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{1,6}$/i;

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address. Example myemail@gmail.com")
    .min(3, "¡Must be 3 characters or more!")
    .max(254, "¡Must be 254 characters or less!")
    .matches(emailRules, {
      message: "Invalid email address. Example myemail@gmail.com",
    })
    .required("Required field"),
  password: Yup.string()
    .min(
      8,
      "Minimum 8 characters: lowercase/uppercase Latin letters and numbers"
    )
    .max(50, "¡Must be 50 characters or less!")
    .matches(passwordRules, {
      message:
        "Minimum of 8 characters: Latin letters in lower/upper case and numbers",
    })
    .required("Required field"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  // const [eyeOutlined, setEyeOutlined] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const handleClick = () => {
  //   setEyeOutlined(!eyeOutlined);
  // }

  return (
    <Wrapper>
      {/* <Title>Exit</Title> */}
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validateOnBlur
        validationSchema={SigninSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(authOperations.logIn(values));
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <FormLogin onSubmit={handleSubmit}>
          <InputBlock>
                <TextField
                  sx={{ width: "25ch", "& label": { letterSpacing: "1px" } }}
                  id="standard-basic email"
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
                Login
              </Button>

              <NavLink to="/SlimMom/signup">
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
                  Sign up
                </Button>
              </NavLink>
            </Stack>
          </FormLogin>
        )}
      </Formik>
    </Wrapper>
  );
}
