import { Item, Icon } from "./DiaryProductsListItem.styled";
// import CrossIcon from "../../images/svg/cross.svg"
import authSelectors from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../redux/dairy/dairySelector";
import { removeProduct } from "../../redux/dairy/dairyOperations";
import { useEffect, useState } from "react";
import { getDairy } from "../../redux/services/api-reguest";
// import { setSummaryId } from "../../redux/dairy/dairyReducer";

export const DiaryProductsListItem = ({  id, name, grams, calories }) => {
  const date = useSelector(getDate);
  // const sumId = useSelector(getSummaryId);
  const dispatch = useDispatch();
  const [infoDelete, setInfoDelete] = useState([]);

  // const token = useSelector(authSelectors.getToken)
  useEffect(() => {
    const deleteProd = async () => {
      try {
        const nDate = date;
        const body = { date: `${nDate}` };
        const infoitem = await getDairy(body);
        // console.log(infoitem);
        setInfoDelete(infoitem);
      } catch (error) {
        console.log(error);
      }
    };
    deleteProd();
  }, [date]);

  // if (!infoDelete.daySummary._id) {
  //   sum = "655296c0de8a7a2b9647d4e0";
  // } else {
    // }
    
    // const idForAdd = infoDelete.daySummary;
    // let sum = idForAdd[0]._id; 
    // let sum = infoDelete.daySummary;
  const day = infoDelete.idDay;
  const product = id;
  // console.log(infoDelete.daySummary._id)
  let sum = `${infoDelete.daySummary._id}`; 
  console.log(sum)
  // const sum = () => {
  //   infoDelete.daySummary.forEach((daySummary) => {
  //     if (daySummary) {
  //       console.log(infoDelete.daySummary.date)
  //       // console.log(`${daySummary.daySummary._id}`)
  //     } else {
  //       console.log('sorry not found your sum id')
  //     }
  //   })
  // }


  const handleDelete = async (day, product, sum) => {
    try {
      dispatch(
        removeProduct({
          dayId: `${day}`,
          productId: `${product}`,
          sumId: `${sum}`,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Item>
      <p className="products-item-name">{name}</p>
      <p className="products-item-grams">{grams} g</p>
      <p className="products-item-calories">
        {calories} <span>kcal</span>
      </p>
      <button
        alt="delete product"
        onClick={() => {
          handleDelete(day, product, sum);
        }}
      >
      ✖
      </button>
    </Item>
  );
};
