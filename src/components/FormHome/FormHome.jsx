import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./FormHome.css";

const currencies = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];

const FormHome = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mt: "50px" }} className="FormHome">
      <Grid container spacing={3}> 
        <Grid item xs={0}>
          <TextField
            id="standard-number-1"
            label="Height - Cm *"
            type="number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={0}>
          <TextField
            id="standard-number-1"
            label="Age *"
            type="number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={0}>
          <TextField
            id="standard-number-1"
            label="Current weight - Kg *"
            type="number"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{mr:"-10px"}}>
        <Grid item xs={0}>
          <TextField
            id="standard-number-1"
            label="Desired weight - Kg *"
            type="number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={0}>
          <TextField
            id="standard-number-1"
            label="Blood type ⥥ *"
            type="number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={0}>
          <TextField
            
            id="outlined-select-currency"
            select
            helperText=""
            // label="Select"
            defaultValue="1"
            sx={{width:"18ch"}}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormHome;
