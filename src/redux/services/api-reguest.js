import axios from 'axios';
import Notiflix from 'notiflix';

// const base = "https://slimmomapi-dev-qjnz.4.us-1.fl0.io/api";
const base = "http://localhost:3000/api";


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
   
    throw error;
  }
};

export const addProductForUser = async newProduct => {
  try {
    const { data } = await axios.patch(`${base}/days`, newProduct);
    return data;
  } catch (error) {
    Notiflix.Notify.error("Try with other product", {
      timeout: 6000,
    });
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
     Notiflix.Notify.error("Error deleting product", {
      timeout: 6000,
    });
    throw error;
  }
}