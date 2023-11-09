import { Item, Icon } from "./DiaryProductsListItem.styled"
// import CrossIcon from "../../images/svg/cross.svg"
import authSelectors from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../redux/dairy/dairySelector";
import { fetchProducts } from "../../redux/dairy/dairyOperations";
import {deleteProductRequest} from "../../redux/services/api-reguest";

export const DiaryProductsListItem = ({id, name, grams, calories}) => {
  const date = useSelector(getDate)
  const dispatch = useDispatch()
  const token = useSelector(authSelectors.getToken)
  const handleDelete = async (id) => {
    try {
      const result = await deleteProductRequest(id, token, date)
      dispatch(fetchProducts(result))
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Item>
      <p className="products-item-name">{name}</p>
      <p className="products-item-grams">{grams} g</p>
      <p className="products-item-calories">{calories} <span>kcal</span></p>
      <Icon alt="delete product" onClick={() => {handleDelete(id)}}/>
    </Item>
  )
}