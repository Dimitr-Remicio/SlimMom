import React, { useState, useEffect } from 'react';
import '../DarkMode/DarkMode.css';
import ReactSwitch from 'react-switch';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const localDarkMode = window.localStorage.getItem('darkMode');
    return localDarkMode ? JSON.parse(localDarkMode) : false;
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('dark-mode', darkMode);

    window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div style={{
      height:"25px"
    }}>
      <ReactSwitch
       onChange={handleDarkMode}
       checked={darkMode}
       onColor="#FFFFFF"
       onHandleColor="#000000"
       handleDiameter={20}
       uncheckedIcon={false}
       checkedIcon={false}
       boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
       activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
       height={19}
       width={40}
       className="buttonMode"
      />
    </div>
  );
};

export default DarkMode;