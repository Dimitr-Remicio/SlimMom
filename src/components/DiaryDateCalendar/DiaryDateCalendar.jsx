import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DiaryDateCalendar.css"; // Importa tus estilos CSS aquí
import CalendarIcon from "../../assets/calendar.svg"; // Importa tu imagen del icono

const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="diary-date-calendar">
      <div className="calendar-display">
        <div className="calendar-input">
          {selectedDate.toDateString()}
        </div>
        <img src={CalendarIcon} alt="calendar icon" />
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        maxDate={today}
        calendarClassName="custom-calendar"
      />
    </div>
  );
};

export default DiaryDateCalendar;