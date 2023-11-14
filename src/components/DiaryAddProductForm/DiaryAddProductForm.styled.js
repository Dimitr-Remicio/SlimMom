import { Field, Form } from "formik";
import styled from "styled-components";

export const NameInput = styled(Field)`
  border: 1px solid #000;
  width: 280px;
  margin-bottom: 32px;
  padding-bottom: 8px;
  padding-left: 8px;
  border-bottom: 1px;
  font-size: 15px;
  color: black;
  background-color: transparent;
  letter-spacing: 0.04em;
  border-radius: 15px;
  &::placeholder {
    color: gray;
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    margin-right: 12px;
    width: 240px;
    border-radius: 15px;
    margin-bottom: 0px;
  }
  @media (min-width: 1024px) {
    width: 240px;
    margin-right: 48px;
    margin-bottom: 0px;
    border-radius: 15px;
  }
`;

export const GramsInput = styled(Field)`
  text-align: left;
  border: 2px solid #000;
  border-bottom: 2px solid #000;
  padding-right: 18px;

  width: 280px;
  margin-bottom: 60px;
  border-bottom: 1px;
  color: black;

  background-color: transparent;
  border-radius: 15px;

  letter-spacing: 0.04em;
  &::placeholder {
    color: gray;
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    text-align: right;
    width: 107px;
    margin-bottom: 0px;
    margin-right: 8px;
    border-radius: 15px;
  }
  @media (min-width: 1024px) {
    text-align: right;
    width: 107px;
    margin-bottom: 0px;
    margin-right: 60px;
    border-radius: 15px;
  }
`;

export const NameError = styled.div`
  display: inline;
  text-align: center;
  top: 80px;
  right: 40px;
  position: absolute;
  font-size: 10px;
  color: red;
  padding: 5px;
  border-radius: 5px;
  width: 240px;
  @media (min-width: 426px) and (max-width: 1023px) {
    left: 0;
    top: 55px;

    text-align: left;
  }
  @media (min-width: 1024px) {
    left: 0;
    top: 8rem;
    text-align: left;
  }
`;

export const GramsError = styled.div`
  display: inline;
  position: absolute;
  top: 90px;
  right: 65px;
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  @media (min-width: 426px) and (max-width: 1023px) {
    top: 55px;
    right: 200px;
    width: 107px;
  }
  @media (min-width: 1024px) {
    top: 55px;
    right: 207px;
    width: 107px;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 50px 76px;
  border: 3px;
  font-size: 10px;
  letter-spacing: 0.04em;
  cursor: pointer;

  color: black;
  background: orange;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 12px 13px 11px;
    border-radius: 50%;
  }
  @media (min-width: 1024px) {
    padding: 20px;
    border-radius: 10px;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const FormWrapper = styled(Form)`
  display: block;
  text-align: center;

  @media (min-width: 426px) and (max-width: 1023px) {
    display: flex;
    max-width: 503px;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const SearchBox = styled.ul`
  display: none;
  position: absolute;
  background-color: white;
  width: 450px;
  box-shadow: 5px 4px 9px -3px rgba(0, 0, 0, 0.53);
  &.visible {
    display: block;
  }
  @media (max-width: 425px) {
    top: 40px;
  }
`;

export const SearchItem = styled.li`
  cursor: pointer;
  padding: 5px 10px;
  border-bottom: 1px;
  &:hover {
    background-color: green;
  }
`;

export const SearchItemNotRecommended = styled.li`
  cursor: pointer;
  padding: 5px 10px;
  border-bottom: 2px;
  background-color: #f5503b;
  color: white;

  &:hover {
    background-color: #bf3e2e;
  }

  &::after {
    content: "Not recommended";
    font-size: 10px;
    margin-left: 10px;
  }
`;
