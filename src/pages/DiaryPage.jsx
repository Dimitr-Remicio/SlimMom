import { Wrapper, WrapperAll } from "../components/DiaryPage/DiaryPage.styled";
import { DiaryAddProductForm } from "../components/DiaryAddProductForm/DiaryAddProductForm";
import { DiaryDateCalendar } from "../components/DiaryDateCalendar/DiaryDateCalendar";
import { DiaryProductsList } from "../components/DiaryProductsList/DiaryProductsList";
// import RightSideBar from "../components/RightSideBar/RightSideBar";
import React from "react";
import { useState } from "react";
import { DiaryModal } from "../components/DiaryModal/DiaryModal";
import { useMediaQuery } from "react-responsive";
import { Button } from "../components/DiaryPage/DiaryPage.styled";
// import AddIcon from '../images/svg/add.svg';

const body = document.querySelector("body");

const DiaryPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width: 426px)" });

  const onModalOpen = () => {
    setIsModalOpened(true);
    body.style.overflow = "hidden";
  };

  const onModalClose = () => {
    setIsModalOpened((isModalOpened) => !isModalOpened);
    body.style.overflow = "auto";
  };

  return (
    <WrapperAll>
      <Wrapper>
        <DiaryDateCalendar />
        {!mobile && <DiaryAddProductForm />}

        <DiaryProductsList />
        {mobile && <Button onClick={() => onModalOpen()}>+</Button>}

        {isModalOpened && <DiaryModal onClose={onModalClose} />}
      </Wrapper>
      {/* <RightSideBar /> */}
    </WrapperAll>
  );
};
export default DiaryPage;
