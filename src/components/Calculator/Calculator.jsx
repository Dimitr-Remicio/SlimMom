/* eslint-disable react/prop-types */
// import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./Calculator.css";
import Button from "@mui/material/Button";

import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import calcSelectors from "../../redux/calculatorSlice/calculatorSelectors";
import authSelector from "../../redux/auth/selectors";
import {
  setIsModalOpen,
  updateUser,
} from "../../redux/calculatorSlice/calcSlice";
import calcOperation from "../../redux/calculatorSlice/calcOperation";

import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const CalculatorSchema = Yup.object().shape({
  height: Yup.number()
    .typeError("Обов`язково до заповнення")
    .min(100, "Мінімальний зріст 100 см")
    .max(250, "Максимальний зріст 250 см")
    .required("Обов`язково до заповнення"),
  age: Yup.number()
    .typeError("Обов`язково до заповнення")
    .min(18, "Мінімальний вік 18 років")
    .max(100, "Максимальний вік 100 років ")
    .required("Обов`язково до заповнення"),
  weightCurrent: Yup.number()
    .typeError("Обов`язково до заповнення")
    .moreThan(
      Yup.ref("weightDesired"),
      "Поточна вага має бути більшою за бажану"
    )
    .test("min-width", "Мінімальна вага 30 кг", function (value) {
      return value > 29;
    })
    .max(500, "Максимальна вага 500 кг")
    .required("Обов`язково до заповнення"),
  weightDesired: Yup.number()
    .typeError("Обов`язково до заповнення")
    .min(20, "Мінімальна вага 20 кг")
    .max(500, "Максимальна вага 500 кг")
    .required("Обов`язково до заповнення"),
  blood: Yup.string().required(),
});

const CalcPublic = (props) => {
  const { title } = props;

  const authUserParams = useSelector(calcSelectors.getUserInfo);
  //   const LoaderStatus = useSelector(calcSelectors.getLoaderStatus);
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const { user } = useSelector(calcSelectors.getUserData);

  const FullUser = useSelector(authSelector.getFullUser);
  const dispatch = useDispatch();

  const initFormState = {
    height: "",
    age: "",
    weightCurrent: "",
    weightDesired: "",
    blood: "1",
  };

  const LoginFormState = {
    height: FullUser.height,
    age: FullUser.age,
    weightCurrent: FullUser.weightCurrent,
    weightDesired: FullUser.weightDesired,
    blood: String(FullUser.blood),
  };

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        dispatch(updateUser(FullUser));
        console.log(FullUser);
        dispatch(calcOperation.calcUserUpdate(FullUser));
      }
    }, 500);
  }, [FullUser, dispatch, isLoggedIn]);

  // const formState = isLoggedIn ? LoginFormState : initFormState;
  const handleChangeitm = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h1>{title}</h1>
      <Formik
        validateOnChange="true"
        initialValues={isLoggedIn ? LoginFormState : initFormState}
        validationSchema={CalculatorSchema}
        onSubmit={(values, actions) => {
          if (isLoggedIn) {
            dispatch(calcOperation.calcUserUpdate(values));
            dispatch(updateUser(values));
          } else {
            dispatch(calcOperation.calc(values));
            dispatch(setIsModalOpen(true));
          }
          actions.setSubmitting(false);

          if (!isLoggedIn) {
            actions.resetForm();
          }

          return;
        }}
      >
        {(props) => {
          const { values, handleSubmit, handleChange, handleBlur } = props;
          const { height, age, weightCurrent, weightDesired } = values;

          const settings = [
            {
              name: "height",
              type: "number",
              label: "Height - Cm*",
              value: height,
              xs: 10,
              xs_calc: "xs_calc",
            },
            {
              name: "weightDesired",
              type: "number",
              label: "Desired Weight - Kg*",
              value: weightDesired,
              xs: 5.5,
              xs_calc: "xs_calc",
            },
            {
              name: "age",
              type: "number",
              label: "Age*",
              value: age,
              xs: 10,
              xs_calc: "xs_calc",
            },
            {
              name: "weightCurrent",
              type: "number",
              label: "Current Weight - Kg*",
              value: weightCurrent,
              xs: 6,
              xs_calc: "xs_calc",
            },
          ];

          const bloodSettings = [
            { id: "blood1", value: "1", label: "1" },
            { id: "blood2", value: "2", label: "2" },
            { id: "blood3", value: "3", label: "3" },
            { id: "blood4", value: "4", label: "4" },
          ];
          return (
            <>
              <form id="calculatorForm" onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={3}
                  key={name}
                  className="FormContainer"
                >
                  {settings.map(({ name, type, label, value, xs, xs_calc }) => {
                    return (
                      <Grid
                        item
                        xs={xs}
                        id={"cont" + name}
                        className="GridTxtField"
                        key={name}
                      >
                        <TextField
                          id={name}
                          className={xs_calc}
                          // id="standard-number-1"
                          label={label}
                          type={type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={value || ""}
                          variant="standard"
                        />
                      </Grid>
                    );
                  })}
                  <Grid className="bloodType">
                    <Grid
                      item
                      xs={0}
                      sx={{ paddingBottom: "1.8rem" }}
                      className="bloodLabel"
                    >
                      <p
                        id="standard-number-1"
                        className="BloodTypeLabel"
                        style={{
                          fontSize: "16px",
                          letterSpacing: "0.15008px",
                          lineHeight: "25px",
                          textDecoration: "none solid rgba(0, 0, 0, 0.87)",
                          wordSpacing: "0px",
                          paddingLeft: "0",
                          color: "#828282",
                          borderBottom: "1px solid #828282",
                        }}
                      >
                        Blood type <b>(select)</b>
                      </p>
                    </Grid>
                    <Grid item xs={0} className="BloodContain">
                      <TextField
                        id="outlined-select-currency"
                        select
                        helperText=""
                        className="BloodSelector"
                        defaultValue="1"
                        onChange={handleChangeitm}
                        sx={{ width: "18ch"}}
                      >
                        {bloodSettings.map((option) => (
                          <MenuItem
                            key={option.value}
                            // value={values.blood === option.value}
                            value={option.value}
                            className="blooditems"
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </Grid>
              </form>

              {isLoggedIn ? (
                <Button
                  form="calculatorForm"
                  type="submit"
                  className="calc__btn"
                  style={{
                    backgroundColor: "#FC842D",
                    padding: "20px 20px",
                    borderRadius: "20em",
                    fontFamily: "Verdana bold",
                    textTransform: "none",
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                  }}
                  variant="contained"
                >
                  Start losing weight
                </Button>
              ) : (
                <Button
                  form="calculatorForm"
                  type="submit"
                  className="calc__btn"
                  style={{
                    backgroundColor: "#fc842d",
                    padding: "15px 20px",
                    borderRadius: "20em",
                    position: "absolute",
                    bottom: "0",
                  }}
                  variant="contained"
                >
                  Start losing weight
                </Button>
              )}
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default CalcPublic;
