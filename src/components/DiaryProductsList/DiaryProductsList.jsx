import { DiaryProductsListItem } from '../DiaryProductsListItem/DiaryProductsListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from "../../redux/auth/selectors";
import { getEatProducts, getDate, } from '../../redux/dairy/dairySelector';
import { fetchProducts } from "../../redux/dairy/dairyOperations";
import { List } from './DiaryProductsList.styled';
import { getDairy} from '../../redux/services/api-reguest';

export const DiaryProductsList = () => {
  const token = useSelector(authSelectors.getToken);
  const date = useSelector(getDate);
  const dispatch = useDispatch();
  const products = useSelector(getEatProducts);
  console.log('listproduct', products);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await getDairy(date, token)
        if (result.length > 0) {
          dispatch(fetchProducts(result[0].productInfo));
        } else {
          dispatch(fetchProducts([]));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [date, dispatch, token]);

  return (
    <List>
      {products ? (
        products.map(product => (
          <DiaryProductsListItem
            key={product._id}
            id={product._id}
            name={product.title}
            grams={product.weight}
            calories={product.calories}
          />
        ))
      ) : null}
    </List>
  );
}
