import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 15px 15px 15px 0px;
  border-radius:20px;
  background-color: var(--backgrounditem);
      width:auto;
      max-width:80vw;
      padding: 10px 40px;
  @media (min-width: 1024px) {
      padding: 10px 40px;
  }

  & .products-item-name {
    text-align: left;
    width: 300px;
    border-bottom: 1px;
    padding: 20px 0;

    @media (min-width: 426px) and (max-width: 1023px) {
      width: 240px;
      padding: 20px 0;
    }
    @media (min-width: 1024px) {
      width: 300px;
    }
  }

  & .products-item-grams {
    text-align: right;
    width: 49px;
    border-bottom: 1px;
    margin: 0 8px;
    padding: 8px 0;
    color: var(text-color) !important;

    @media (min-width: 426px) and (max-width: 1023px) {
      width: 107px;
      padding: 20px 0;
    }
    @media (min-width: 1024px) {
      width: 107px;
      padding: 20px 0;
    }
  }

  & .products-item-calories {
    text-align: right;
    width: 58px;
    border-bottom: 1px;
    padding: 8px 0;

    @media (min-width: 426px) and (max-width: 1023px) {
      width: 107px;
      padding: 20px 0;
    }
    @media (min-width: 1024px) {
      width: 107px;
      padding: 20px 0;
    }

    & span {
      font-size: 10px;
    }
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  margin-left: 15px;

  @media (min-width: 426px) and (max-width: 1023px) {
    margin-left: 30px;
  }
  @media (min-width: 1024px) {
    margin-left: 30px;
  }
`;
