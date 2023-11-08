import axios from 'axios';
import { toast } from 'react-toastify';
import { toastStyles } from '../../styles/toastStyled.js';


// raiz
// const base = "https://slimmomapi-dev-xdce.2.us-1.fl0.io/api";
// dairodev
// const base = "https://slimmomsapi-dev-bbqt.3.us-1.fl0.io/api";
const base = "https://slimmom-7ckv.onrender.com/api";


axios.defaults.baseURL = `${base}`;

export const searchProduct = async (search) => {
    const { data } = await axios.get(`${base}/products?search=${search}`);
    console.log(data)
    return data;
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
export const getDairy = async () => {
  try {
    const { data } = await axios.post(`${base}/days/info`);
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
    const { data } = await axios.patch(`${base}/days`, newProduct);
    toast.success(`З'їдено!`, toastStyles);
    return data;
  } catch (error) {
    toast.error(`Виникла помилка! ${error.message}`, toastStyles);
    throw error;
  }
};

export const deleteProductRequest = async () => {
  try {
    const { data } = await axios.delete(`${base}/days`);
    toast.success(`Видалено!`, toastStyles);
    return data;
  } catch (error) {
    toast.error(`Виникла помилка! ${error.message}`, toastStyles);
    throw error;
  }
};
