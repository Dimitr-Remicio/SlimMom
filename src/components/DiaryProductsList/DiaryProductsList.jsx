import { DiaryProductsListItem } from "../DiaryProductsListItem/DiaryProductsListItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../redux/dairy/dairySelector";

import { List } from "./DiaryProductsList.styled";
import { getDairy } from "../../redux/services/api-reguest";

export const DiaryProductsList = () => {
  const [products, setProducts] = useState([]);

  const date = useSelector(getDate);

  // useEffect(() => {
  const getProducts = async () => {
    try {
      const nDate = date;
      const body = { date: nDate };
      console.log(body);
      const findDay = await getDairy(body);
      if (!findDay.addedProducts) {
        console.log("no ñero");
      } else {
        setProducts(findDay.addedProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // getProducts();
  // }, [date]);

  return (
    <>
      <div className="refrshCont">
        <button className="buttonRefresh" onClick={() => getProducts()}>
          ⟳
        </button>
      </div>
      <div className="scrollWrapper" id="style-3">
        <List>
          {products.length > 0 ? (
            products.map(
              ({ _id, foodId, title, amount, caloriesPerAmount }) => (
                <DiaryProductsListItem
                  key={_id}
                  id={foodId}
                  title={title}
                  amount={amount}
                  calories={caloriesPerAmount}
                />
              )
            )
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
