import styled from 'styled-components';

export const DatePickerWrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #000;
  font-family: "Verdana Bold";
  font-size: 20px;
  padding: 0px;
  border: 1px;
  outline: none;
  @media (max-width: 425px) {
  font-size: 25px;
    margin-bottom: 12px;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
  font-size: 15px;
  font-size: 30px;
  }
  @media (min-width: 1024px) {
  font-size: 15px;
  font-size: 38px;
  margin-bottom:20px
  }
`;

export const Icon = styled.img`
  margin-left: 50px;
`;
