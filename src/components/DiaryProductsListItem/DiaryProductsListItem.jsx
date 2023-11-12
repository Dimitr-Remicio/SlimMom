import { Item, Icon } from "./DiaryProductsListItem.styled"
// import CrossIcon from "../../images/svg/cross.svg"
import authSelectors from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../redux/dairy/dairySelector";
import { removeProduct } from "../../redux/dairy/dairyOperations";

export const DiaryProductsListItem = ({id, name, grams, calories}) => {
  const date = useSelector(getDate)
  const dispatch = useDispatch()
  // const token = useSelector(authSelectors.getToken)
  const handleDelete = async (date, id) => {
    try {
        dispatch(removeProduct({ dataFormat: date, _id: id }));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Item>
      <p className="products-item-name">{name}</p>
      <p className="products-item-grams">{grams} g</p>
      <p className="products-item-calories">{calories} <span>kcal</span></p>
      <Icon alt="delete product" onClick={() => {handleDelete(date, id)}}/>
    </Item>
  )
}