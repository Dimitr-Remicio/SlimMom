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

// export const DiaryDateCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   // const [currentDate, setCurrentDate] = useState(new Date());
//   const dispatch = useDispatch();

//   // let dateIn = useSelector(getDate);

  
//   const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

//   const handleChange = (date) => {
//     if (isLoggedIn) {
//       const formattedDate = moment(new Date()).format("yyyy-MM-DD");
//       setSelectedDate(date);
//       // console.log(date);
//       dispatch(addDate(formattedDate));
//     }
//   };
  
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     const formattedDate = moment(new Date()).format("yyyy-MM-DD");
//   //     setCurrentDate(formattedDate);
//   //   }, 1000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   // console.log(currentDate);

  
//   // useEffect(() => {
//     //   setTimeout(() => {
//   //     if (isLoggedIn) {
//   //       const refreshDate = (dateIn) => {
//   //         const formattedDate = `${dateIn}`;
//   //         setSelectedDate(formattedDate);
//   //         dispatch(addDate(formattedDate));
//   //       };
//   //       refreshDate(dateIn);
//   //     };
//   //   }, 50);
//   // }, [dispatch, dateIn, isLoggedIn]);


//   const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//     <DatePickerWrapper onClick={onClick} ref={ref}>
//       {value} 📅
//     </DatePickerWrapper>
//   ));

//   return (
//     <>
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => handleChange(date)}
//         // dateFormat="dd.MM.yyyy"
//         dateFormat="yyyy-MM-dd"
//         customInput={<ExampleCustomInput />}
//         maxDate={new Date()}
//       />
//     </>
//   );
// };
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