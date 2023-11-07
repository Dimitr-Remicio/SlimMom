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
import { updateUser } from "../../redux/calculatorSlice/calcSlice";
import calcOperation from "../../redux/calculatorSlice/calcOperation";

import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const CalculatorSchema = Yup.object().shape({
  height: Yup.number()
    .typeError("Campo obligatorio")
    .min(100, "Altura mínima de 100 cm")
    .max(250, "Altura máxima de 250 cm")
    .required("Campo obligatorio"),
  age: Yup.number()
    .typeError("Campo obligatorio")
    .min(18, "Edad mínima de 18 años")
    .max(100, "Edad máxima de 100 años")
    .required("Campo obligatorio"),
  weightCurrent: Yup.number()
    .typeError("Campo obligatorio")
    .moreThan(
      Yup.ref("weightDesired"),
      "El peso actual debe ser mayor que el deseado"
    )
    .test("min-width", "Peso mínimo de 30 kg", function (value) {
      return value > 29;
    })
    .max(500, "Peso máximo de 500 kg")
    .required("Campo obligatorio"),
  weightDesired: Yup.number()
    .typeError("Campo obligatorio")
    .min(20, "Peso mínimo de 20 kg")
    .max(500, "Peso máximo de 500 kg")
    .required("Campo obligatorio"),
  blood: Yup.string().required(),
});

const CalcPublic = (props) => {
  const { title } = props;
  // OPNE Y CLOSE
  const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar la apertura y cierre del modal

  const handleOpenModal = () => {
    console.log("Opening modal");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setModalOpen(false);
  };

  const authUserParams = useSelector(calcSelectors.getUserInfo);
  //   const LoaderStatus = useSelector(calcSelectors.getLoaderStatus);
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

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
    height: authUserParams.height,
    age: authUserParams.age,
    weightCurrent: authUserParams.weightCurrent,
    weightDesired: authUserParams.weightDesired,
    blood: String(authUserParams.blood),
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(updateUser(FullUser));
    }
  }, [FullUser, dispatch, isLoggedIn]);

  const formState = isLoggedIn ? LoginFormState : initFormState;

  return (
    <>
      <h1>{title}</h1>
      <Formik
        validateOnChange="true"
        initialValues={formState}
        validationSchema={CalculatorSchema}
        onSubmit={(values, actions) => {
          if (isLoggedIn) {
            dispatch(calcOperation.calcUserUpdate(values));
            dispatch(updateUser(values));
          } else {
            dispatch(calcOperation.calc(values));
          }
          actions.setSubmitting(false);

          if (!isLoggedIn) {
            actions.resetForm();
          }

          return;
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => {
          {
            /* const { values, handleSubmit, handleChange, handleBlur } = props; */
          }
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
                        sx={{ width: "18ch" }}
                      >
                        {bloodSettings.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
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
                  style={{
                    backgroundColor: "#FC842D",
                    padding: "15px 20px",
                    width: "18rem",
                    borderRadius: "20em",
                    fontFamily: "Verdana bold",
                    textTransform: "none",
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    transform: "translate(25%)",
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
                  onClick={handleOpenModal}
                >
                  Start losing weight
                </Button>
              )}
            </>
          );
        }}
      </Formik>
      {/* {LoaderStatus && <Loader />}
      {showModal && !LoaderStatus && (
        <Modal setShowModal={setShowModal}>
          <ModalContent setShowModal={setShowModal}></ModalContent>
        </Modal>
      )} */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default CalcPublic;
