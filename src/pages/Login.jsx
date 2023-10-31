import React from "react";
import { NavLink } from 'react-router-dom';
// import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";  
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import "../styles/login.css";

// import Container from '../components/Container/Container';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

          <div>
            <div style={{ marginBottom: "30px", marginTop: "30px" }}>
              <TextField
                color="warning"
                sx={{ width: "25ch", "& label": { letterSpacing: "1px" } }}
                id="standard-basic"
                label="Email*"
                variant="standard"
              />
            </div>
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
                focused
                id="standard-adornment-password"
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
          </div>
          <section>
            <Stack direction="row" spacing={2}>
              <Button
                style={{
                  backgroundColor: "#FC842D",
                  padding: "15px 25px",
                  width:"10rem",
                  borderRadius: "20em",
                  fontFamily: "Verdana bold",
                  textTransform: "none",
                }}
                variant="contained"
                href="#contained-buttons"
              >
                Login
              </Button>
              <NavLink to="/SlimMom/signup">
              <Button 
                  variant="outlined"
                style={{
                  border: "3px solid #FC842D",

                  color: "#FC842D",
                  padding: "15px 25px",
                  width:"15rem",
                  borderRadius: "20em",
                  fontFamily: "Verdana bold",
                  textTransform: "none",
                  textAlign:"center",
                  
                }}
                >
                Create an account
              </Button>
              </NavLink>
            </Stack>
          </section>
        </div>
      </section>
    </>
  );
};

export default Login;
