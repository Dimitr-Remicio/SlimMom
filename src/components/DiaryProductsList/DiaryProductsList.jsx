import { DiaryProductsListItem } from "../DiaryProductsListItem/DiaryProductsListItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/selectors";
import { getEatProducts, getDate } from "../../redux/dairy/dairySelector";

import { List } from "./DiaryProductsList.styled";
import { format, parse } from "date-fns";
import { getDairy } from "../../redux/services/api-reguest";

export const DiaryProductsList = () => {
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  console.log("listproduct", products);
  
  const cambiarFormatoFecha = (fechaOriginal) => {
    //change date format
    const fechaParseada = parse(fechaOriginal, "yyyy-MM-dd", new Date());
    const nuevaFecha = format(fechaParseada, "yyyy-MM-dd");
    return nuevaFecha;
  };
  
  const date = useSelector(getDate);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const nDate = cambiarFormatoFecha(date);
        const body = { date: `${nDate}` };
        const findDay = await getDairy(body);
        
        setProducts(findDay.eatenProducts);

      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
    
  }, [date]);
  
  // const item = findDay.eatenProducts;
  console.log(products)

  return (
    <List>
      {products
        ? products.map(({_id, title, weight, calories}) => (
            <DiaryProductsListItem
              key={_id}
              id={_id}
              name={title}
              grams={weight}
              calories={calories}
            />
          ))
        : null}
    </List>
  );
};
