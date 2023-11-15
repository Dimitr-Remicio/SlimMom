import { Item, Icon } from "./DiaryProductsListItem.styled";
// import CrossIcon from "../../images/svg/cross.svg"
import authSelectors from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../redux/dairy/dairySelector";
import { removeProduct } from "../../redux/dairy/dairyOperations";
import { useEffect, useState } from "react";
import {
  deleteProductRequest,
  getDairy,
} from "../../redux/services/api-reguest";

export const DiaryProductsListItem = ({ id, title, amount, calories }) => {
  const date = useSelector(getDate);
  const dispatch = useDispatch();
  const [infoDelete, setInfoDelete] = useState([]);
  const [sumId, setSumId] = useState([]);

  useEffect(() => {
    const deleteProd = async () => {
      try {
        const nDate = date;
        const body2 = { date: `${nDate}` };
        const infoitem = await getDairy(body2);
        setInfoDelete(infoitem);
      } catch (error) {
        console.log(error);
      }
    };
    deleteProd();
  }, [date]);

  // const daycomplete = async () => {
  //   const nDate = date;
  //   const info = await getDairy({ date: `${nDate}` });
  //   setSumId(info.daySummary.id);
  // };

  // daycomplete();
  
  // const deleteProduct = (dayId, productId, sumId) => {
    // Notiflix.Notify.success('added Product succesfuly!')
  
  //   dispatch(removeProduct({
  //     dayId: dayId,
  //     productId: productId,
  //     sumId: sumId,
  //   }));
  // };
  
  // const dayId = infoDelete.idDay;
  // const productId = id;

  return (
    <Item>
      <p className="products-item-name">{title}</p>
      <p className="products-item-grams">{amount}g</p>
      <p className="products-item-calories">
        {calories} <span>kcal</span>
      </p>
      <button
      className="btndelete"
        alt="delete product"
        // onClick={() => {
        //     deleteProduct(dayId, productId, sumId);
        //   }}
      >
        ✖
      </button>
    </Item>
  );
};
