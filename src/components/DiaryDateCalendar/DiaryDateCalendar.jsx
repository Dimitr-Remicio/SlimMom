import React, { useState, forwardRef } from "react";
import { DatePickerWrapper } from "./DiaryDateCalendar.styled";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
// import CalendarIcon from "../../images/svg/calendar.svg"
import { useDispatch } from "react-redux";
import { addDate } from "../../redux/dairy/dairyReducer";
import moment from "moment/moment";

export const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  const handleChange = (date) => {
    const formattedDate = moment(date).format("yyyy-MM-DD");
    setSelectedDate(date);
    console.log(formattedDate)
    dispatch(addDate(formattedDate));
  };
  // const refreshDate = (date) => {
  //   const formattedDate = moment(date).format("YYYY-MM-DD");
  //   setSelectedDate(formattedDate);
  //   dispatch(addDate(formattedDate));
  // }

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <DatePickerWrapper onClick={onClick} ref={ref}>
      {value} 📅
    </DatePickerWrapper>
  ));

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleChange(date)}
        // dateFormat="dd.MM.yyyy"
        dateFormat="yyyy-MM-dd"
        customInput={<ExampleCustomInput />}
        maxDate={new Date()}
      />
    </>
  );
};
