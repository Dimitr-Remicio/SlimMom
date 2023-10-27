import React from 'react'
import "./button.css";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const Buttons = ({buttonContent, buttonStyle}) => {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#FF5733', // Cambia el color principal del botón
          },
          secondary: {
            main: '#FFAB33', // Cambia el color secundario del botón
          },
        },
      });

  return (
    <div>
      <div>
        <Stack spacing={5} direction="row">
          {buttonContent.map((content, index) => (
            <button style={buttonStyle[index]} key={index}>{content}</button>
          ))}
        </Stack>
      </div>
    </div>
      
  )
}

export default Buttons