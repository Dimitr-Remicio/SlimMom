import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Buttons from "../components/Buttons/Buttons";
import Stack from '@mui/material/Stack';


const Signup = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  

  return (
    <>
    <div
      style={{
        marginTop: "120px",
        marginLeft: "10vw",
      }}
    >
      <h1 style={{
        color: "#FC842D",
      }}>Sign In</h1>
    
        <div>
          <div style={{ marginBottom: "30px", marginTop: "30px" }}>
            <TextField
              color="warning"
              sx={{ width: "25ch" }}
              id="standard-basic"
              label="Name*"
              variant="standard"
            />
          </div>
          <div>
          <TextField
              color="warning"
              sx={{ width: "25ch" }}
              id="standard-basic"
              label="Email*"
              variant="standard"
            />
          </div>
          <FormControl
          style={{marginTop: "30px"}}
            color="warning"
            sx={{ width: "25ch" }}
            variant="standard"
          >
            <InputLabel htmlFor="standard-adornment-password">
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
        <button className="login__buttons">Create <br /> An Acount</button>      
        <button className="login__buttons">Login</button>
      </Stack>
      </section>
    </div>
    </>
  );
  
};

export default Signup;
