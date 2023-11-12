import styled from 'styled-components';

export const DatePickerWrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #000;

  padding: 0px;
  border: 1px;
  outline: none;
  @media (max-width: 425px) {
    margin-bottom: 12px;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
  font-size: 15px;
  }
  @media (min-width: 1024px) {
  font-size: 15px;
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
`;
