import { Field, Form } from "formik";
import styled from "styled-components";

export const NameInput = styled(Field)`
  width: 280px;
  height:40px;
  margin-bottom: 32px;
  padding-bottom: 8px;
  padding-left: 8px;
  border-bottom: 1px;
  font-size: 15px;
  color: var(--textcolor) !important;
  background-color: transparent;
  letter-spacing: 0.04em;
  border-radius: 15px;
  padding-left: 10px;
  border: 1px solid var(--border);
    padding-top:8px;
  &::placeholder {
    color: var(--textcolor) !important;
    opacity: 1;

  }
  &:focus-visible {
    outline: none;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    margin-right: 12px;
    width: 240px;
  height:40px;

    border-radius: 15px;
    margin-bottom: 0px;
  }
  @media (min-width: 1024px) {
    width: 240px;
  height:40px;

    margin-right: 10px;
    margin-bottom: 0px;
    border-radius: 15px;
  }
`;

export const GramsInput = styled(Field)`
  text-align: left;
  border: 2px solid #000;
  border-bottom: 2px solid #000;
  padding-right: 18px;
  height:40px;

  width: 280px;
  margin-bottom: 60px;
  border-bottom: 1px;

  background-color: transparent;
  border-radius: 15px;
  color: var(--textcolor) !important;

  letter-spacing: 0.04em;
  border: 1px solid var(--border);

  &::placeholder {
    padding-right: 30px;
    color: var(--textcolor) !important;
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
  height:40px;

  }
  @media (min-width: 1024px) {
    text-align: right;
    width: 107px;
    margin-bottom: 0px;
    margin-right: 10px;
    border-radius: 15px;
  height:40px;
  padding-left: 10px;

  }
`;

export const NameError = styled.div`
    background-color:red;
  
  display: inline;
  text-align: center;
  top: 0;
  left:0;
  position: absolute;
  font-size: 10px;
  color: white !important;
  padding: 5px;
  border-radius: 5px;
  width: 240px;
  @media (min-width: 426px) and (max-width: 1023px) {
    left: 0;
    top: 55px;

    text-align: left;
  }
  @media (min-width: 1024px) {
    background-color:red;
    top: 8.5rem;
    left: 0rem;
    width: 200px;
  }
  @media (min-width: 1270px) {
    background-color:red;
    top: 11.5rem;
    left: 0rem;
    width: 150px;
  }

`;

export const GramsError = styled.div`
  display: inline;
  position: absolute;
  top: 90px;
  right: 65px;
  font-size: 10px;
  color: var(--textcolor);
  background-color: red;
  padding: 5px;
  color: white !important;

  border-radius: 5px;
  @media (min-width: 426px) and (max-width: 1023px) {
    top: 5rem;
    right: 15rem;
    width: 107px;
  }
  @media (min-width: 1024px) {
    color: white !important;
    top: 8.5rem;
    left: 17.5rem;
    width: 107px;
  }
  @media (min-width: 1270px) {
    color: white !important;
    top: 11.5rem;
    left: 17.5rem;
    width: 107px;
  }
`;

export const Button = styled.button`
  border-radius: 15px;
  padding:10px 10px;
  border: 3px;
  font-size: 10px;
  letter-spacing: 0.04em;
  cursor: pointer;
  height:40px;
  margin-left: 25px;

  background: var(--accentcolor);
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  & p{
    position: relative;
    top:-0.5rem;
  color: var(--textcolorC) !important;

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
  background-color: var(--backgroundSearch);
  width: 450px;
  margin-top: 10px;
  padding-top: 50px !important;
  overflow: hidden;
  overflow-y:hidden;
  padding:20px;
  border-radius:20px;
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
  margin:5px 0;
  border-bottom: 1px;
  border-radius:10px;

  &:hover {
    color: var(--textcolorC) !important;
    background-color: var(--Focus);
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
