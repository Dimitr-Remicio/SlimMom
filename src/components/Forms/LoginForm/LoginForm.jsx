import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import authOperations from "../../../redux/auth/authOperations";
import {
  Wrapper,
  Title,
  FormLogin,
  WrapperInputs,
  Input,
  Label,
  WrapperInputEmail,
  WrapperInputPassword,
  WrapperButtons,
  Button,
  Error,
  WrapperImage,
  Image,
} from "./LoginForm.styled";

import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

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
  const [eyeOutlined, setEyeOutlined] = useState(true);

  const handleClick = () => {
    setEyeOutlined(!eyeOutlined);
  }

  return (
    <Wrapper>
      <Title>Exit</Title>
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        validateOnBlur
        validationSchema = { SigninSchema }
        onSubmit={(values, { resetForm }) => {
          dispatch(authOperations.logIn(values));
          resetForm();
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
        <FormLogin onSubmit={handleSubmit}>
          <WrapperInputs>
            <WrapperInputEmail>
              <Input
                id="email"
                name="email"
                placeholder=" "
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Label htmlFor="email">
               Email *
              </Label>
              {touched.email && errors.email && <Error>{errors.email}</Error>}
            </WrapperInputEmail>
            <WrapperInputPassword>
              <Input
                id="password"
                name="password"
                placeholder=" "
                type={eyeOutlined ? 'password' : 'text'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                autoComplete="off"
              />
              <Label htmlFor="password">
                Password *
              </Label>
              <WrapperImage onClick={handleClick}>
                {eyeOutlined ? (
                  <Image src={eyeCrossed} />
                ) : (
                  <Image src={eye} />
                )}
              </WrapperImage>
              {touched.password && errors.password && <Error>{errors.password}</Error>}
            </WrapperInputPassword>
          </WrapperInputs>
          <WrapperButtons>
            <Button
              type="submit"
              >
                Sign in
            </Button>
            <Link to="/diary">
              <Button
              type="submit"
              >
                Sign up
              </Button>
            </Link>
            </WrapperButtons>
        </FormLogin>
        )}
      </Formik>
    </Wrapper>
  );
}