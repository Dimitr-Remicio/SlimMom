import { DiaryProductsListItem } from "../DiaryProductsListItem/DiaryProductsListItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../redux/dairy/dairySelector";

import { List } from "./DiaryProductsList.styled";
import { getDairy } from "../../redux/services/api-reguest";
import authSelector from "../../redux/auth/selectors";

export const DiaryProductsList = () => {
  const [products, setProducts] = useState([]);

  const date = useSelector(getDate);
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  const getProducts = async (date) => {
    try {
      const nDate = date;
      const body = { date: nDate };
      console.log(body);
      const findDay = await getDairy(body);
      if (!findDay.addedProducts) {
        console.log("no ñero");
      } else {
        console.log(findDay);
        setProducts(findDay.addedProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      if (isLoggedIn) {
        getProducts(date);
      }
  }, [date, isLoggedIn]);

  return (
    <>
      <div className="refrshCont">
        <button className="buttonRefresh" onClick={() => getProducts(date)}>
          ⟳
        </button>
      </div>
      <div className="scrollWrapper" id="style-3">
        <List>
          {products.length >= 0 ? (
            products.map(({ foodId, title, amount, caloriesPerAmount }) => (
              <DiaryProductsListItem
                key={foodId}
                id={foodId}
                title={title}
                amount={amount}
                calories={caloriesPerAmount}
              />
            ))
          ) : (
            <div className="contErrorItm">
              <p>Please refresh, click button on the top ▲</p>
            </div>
          )}
        </List>
      </div>
    </>
  );
};
