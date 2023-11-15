import styled from 'styled-components';

export const WrapperAll = styled.div`
  @media (min-width: 768px) and (max-width: 1023px) {
    width:90vw;
    
    background-repeat: no-repeat;
    background-position: bottom 0px left 0px;
    background-size: auto;
  }
  @media (min-width: 1024px) and (max-width: 1120px) {
    padding: 20px 16px 55px 16px;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    background-repeat: no-repeat, no-repeat;
    background-size: auto,30% 100%;
    background-position: top 0px right 0px, top 0px right -110px;
  }
  @media (min-width: 1121px) and (max-width: 1280px) {
    margin: 0;
    /* height: 100vh; */
    padding: 0;
    display: flex;
    justify-content: space-between;
    background-repeat: no-repeat, no-repeat;
    background-size: auto, 40% 100%;
    background-position: top 0px right 0px, top 0px right 0px;
  }
  @media (min-width: 1280px) {
    margin: 0 auto;
    padding: 50px 0px 0px 0px ;
    margin-top:50px;
    padding: 0;
    display: flex;
    /* height: 100vh; */
    justify-content: space-between;
    background-repeat: no-repeat, no-repeat;
    background-size: auto,50% 100%;
    background-position: top 0px right 0px, top 0px right 0px;
  }
`;

export const Wrapper = styled.div`

width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:40px;/* @media (max-width: 425px) { max-width: 610px; } */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0;
    padding: 0;
    
  }
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 800px;
    align-items: flex-start;
    
    padding: 0px;
    margin: 0;
  }
  &::before {
    @media (min-width: 768px) and (max-width: 1279px) {
      object-fit: fill;
      width: 502px;
      bottom: 40px;
      right: 10%;
      position: absolute;
      content: '';
      z-index: -1;
      background-repeat: no-repeat;
      background-position: left;
      background-size: auto;
    }
    @media (min-width: 1024px) {
      width: 808px;
      top: 80px;
      left: 69%;
      position: absolute;
      content: '';
      z-index: -1;
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 13px 11px;
  border-radius: 50%;
  border: 1px;
  background: orange;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  margin-top: 40px;
`;
