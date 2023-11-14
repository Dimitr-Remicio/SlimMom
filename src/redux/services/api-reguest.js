import axios from 'axios';
import { toast } from 'react-toastify';
import { toastStyles } from '../../styles/toastStyled.js';
import Notiflix from 'notiflix';


// raiz
// const base = "https://slimmomapi-dev-xdce.2.us-1.fl0.io/api";
// const base = "https://slimmomsapi-dev-bbqt.3.us-1.fl0.io/api";
// localhost
//nuervo servidor
const base = "https://slimmomapi-dev-zdmt.2.us-1.fl0.io/api";
// const base = "http://localhost:3000/api";


axios.defaults.baseURL = `${base}`;

export const searchProduct = async (search) => {
    const { data } = await axios.get(`${base}/products?search=${search}`);
    console.log(data);
    return data;
};




export const getAllProduct = async () => {
  try {
    const data = await axios.get(`${base}/products/getAll`);
    return data;
  } catch (error) {
    console.log(
      `¡Error al obtener datos para el producto seleccionado! ${error.message}`);
    throw error;
  }
};
export const getDairy = async body => {
  try {
    const { data } = await axios.post(`${base}/days/info`,body);
    return data;
  } catch (error) {
    console.log(
      `get dayry ¡Error al obtener datos para la fecha seleccionada! ${error.message}`);
    throw error;
  }
};

export const addProductForUser = async newProduct => {
  try {
    const { data } = await axios.patch(`${base}/days`, newProduct);
    return data;
  } catch (error) {
    console.log(`Ocurrió un error! ${error.message}`);
    throw error;
  }
};

export const deleteProductRequest = async ({dayId, productId, sumId}) => {
  // console.log(body);
  try {
    const { data } = await axios.delete(`${base}/days`, {dayId,productId,sumId});
    Notiflix.Notify.success(`Eliminado`, {
      timeout: 6000,
    });
    return data;
  } catch (error) {
    console.log('pase bonito')
    throw error;
  }
}