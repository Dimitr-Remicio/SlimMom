import axios from 'axios';
import { toast } from 'react-toastify';
import { toastStyles } from '../../styles/toastStyled.js';


// raiz
// const base = "https://slimmomapi-dev-xdce.2.us-1.fl0.io/api";
// dairodev
const base = "https://slimmomsapi-dev-bbqt.3.us-1.fl0.io/api";
axios.defaults.baseURL = `${base}`;

export const searchProduct = async (search) => {
  try {
    const { data } = await axios.get(`/products?product=${search}`);
    return data;
  } catch (error) {
    throw error;
  }
};




export const getAllProduct = async () => {
  try {
    const data = await axios.get(`${base}/products/getAll`);
    return data;
  } catch (error) {
    toast.error(
      `Помилка отримання даних на вибрану дату! ${error.message}`,
      toastStyles
    );
    throw error;
  }
};
export const getDairy = async date => {
  try {
    const { data } = await axios.get(`/calc/user/${date}`);
    return data;
  } catch (error) {
    toast.error(
      `Помилка отримання даних на вибрану дату! ${error.message}`,
      toastStyles
    );
    throw error;
  }
};

export const addProductForUser = async newProduct => {
  try {
    const { data } = await axios.post('/calc/user', newProduct);
    toast.success(`З'їдено!`, toastStyles);
    return data;
  } catch (error) {
    toast.error(`Виникла помилка! ${error.message}`, toastStyles);
    throw error;
  }
};

export const deleteProductRequest = async ({ dataFormat, id }) => {
  try {
    const { data } = await axios.delete(`/calc/user/${dataFormat}/${id}`);
    toast.success(`Видалено!`, toastStyles);
    return data;
  } catch (error) {
    toast.error(`Виникла помилка! ${error.message}`, toastStyles);
    throw error;
  }
};
