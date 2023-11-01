import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DiaryDateCalendar.css"; // Importa tus estilos CSS aquí
import CalendarIcon from "./images/calendar.png"; 

const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="diary-date-calendar">
       <div className="date-display">
        <div className="date-text">
          {selectedDate.getDate()}.{selectedDate.getMonth() + 1}.{selectedDate.getFullYear()}
        </div>
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        maxDate={today}
        customInput={
                        
            <div className="calendar-input">
            <img src={CalendarIcon} alt="calendar icon" />
           
          </div>
        }
      />
    </div>
  );
};

export default DiaryDateCalendar;


