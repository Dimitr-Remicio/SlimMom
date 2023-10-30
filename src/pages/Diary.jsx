import React from "react";
import Container from "../components/Container/Container";
import RightSidebar from "../components/RightSidebar/RightSidebar"
import DiaryDateCalendar from "../components/DiaryDateCalendar/DiaryDateCalendar"


const Diary = () => {
  return (
    <Container>
       <div className="Home">

      <DiaryDateCalendar />
      <RightSidebar />
      </div>
    </Container>
  );
};

export default Diary;
