import React, { useState, forwardRef, useEffect } from "react";
import { DatePickerWrapper } from "./DiaryDateCalendar.styled";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
// import CalendarIcon from "../../images/svg/calendar.svg"
import { useDispatch, useSelector } from "react-redux";
import { addDate } from "../../redux/dairy/dairyReducer";
import moment from "moment/moment";
import authSelector from "../../redux/auth/selectors";
import { getDate } from "../../redux/dairy/dairySelector";



export const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  // const refreshDate = (date) => {
    //   const formattedDate = moment(date).format("YYYY-MM-DD");
    //   setSelectedDate(formattedDate);
    //   dispatch(addDate(formattedDate));
    // }
    const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
    
    const handleChange = (date) => {
          if (isLoggedIn){
            const formattedDate = moment(date).format("yyyy-MM-DD");
          setSelectedDate(date);
          console.log(formattedDate)
          dispatch(addDate(formattedDate));
        }
      };
      let dateIn = useSelector(getDate);
      setTimeout(() => {
        if(isLoggedIn){
          console.log(dateIn);
          console.log(selectedDate);
        }
      }, 100);
      

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
