import React from "react";
import { useMediaQuery } from "react-responsive";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import {
  NameInput,
  GramsInput,
  Button,
  FormWrapper,
  SearchBox,
  SearchItem,
  NameError,
  GramsError,
  SearchItemNotRecommended,
} from "./DiaryAddProductForm.styled";
// import AddIcon from "../../images/svg/add.svg"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getDate,
  getToggle,
  getError,
  getSummary,
} from "../../redux/dairy/dairySelector";
import { setProduct } from '../../redux/dairy/dairyReducer';

import { addProduct, fetchDairy } from "../../redux/dairy/dairyOperations";
import {
  addProductForUser,
  searchProduct,
} from "../../redux/services/api-reguest";

import authSelectors from "../../redux/auth/selectors";
import Notiflix from "notiflix";
import { result } from "lodash";

// const schema = yup.object().shape({
//   title: yup.string().required("Name is required field"),
//   weight: yup
//     .number("Grams must be a number")
//     .typeError("Grams must be a number")
//     .required("Grams is required field"),
// });

// export const DiaryAddProductForm = ({ onClose }) => {
//   const [value, setValue] = useState(null);

//   const [productIdd, setProductIdd] = useState("");
//   const [Pweight, setPWeight] = useState("");
//   const dispatch = useDispatch();

//   // const weight = Math.floor(Pweight);
//   const products = useSelector(getProducts);
//   const date = useSelector(getDate);
//   const summary = useSelector(getSummary);
//   const toggle = useSelector(getToggle);
//   let error = useSelector(getError);

//   const mobile = useMediaQuery({ query: "(max-width: 426px)" });

//   const initialValues = {
//     _id: "",
//     title: "",
//     weight: "",
//   };
//   const [searchProducts, setSearchProducts] = useState([]);
//   const [visible, setVisible] = useState(false);
//   // const userInfo = useSelector(authSelectors.getFullUser);

//   const search = async (value) => {
//     try {
//       const result = await searchProduct(value);
//       setSearchProducts(result);
//     } catch (error) {
//       setSearchProducts([]);
//     }
//   };

//   const handleSubmit = async (values) => {
//     schema.validate(values);
//     const { weight, _id } = values;
//     const body = {
//       _id,
//       // title,
//       productWeight: parseInt(weight),
//       date,
//     };
//     console.log(body);
//     try {
//       const result = await addProductForUser(body, date);
//       console.log(result);
//       if (result.length > 0) {
//         dispatch(addProduct(result));
//         console.log(result);
//       } else {
//         dispatch(addProduct([]));
//         console.log(result);
//       }
//     } catch (error) {
//       console.log(result);
//       alert("Oops.. Product not found!");
//     }
//     mobile && onClose();
//     resetForm();
//   };
//   // function onSubmit() {
//   //   if (productId === "") {
//   //     return console.log("Choose a product!");
//   //   }
//   //   if (productWeight <= 0) {
//   //     return console.log("Specify the weight of the product!");
//   //   }

//   //   if (productId !== "" && productWeight >= 1) {
//   //     dispatch(addProduct({ date, productId, productWeight: weight }));
//   //     if (error) {
//   //       return;
//   //     }

//   //     setProductId("");
//   //     setWeight("");
//   //     setValue("");
//   //   }
//   // }

//   const handleChange = (e) => {
//     const title = e.target.value;
//     if (e.target.name === "title") {
//       if (title !== "" && title.length > 1) {
//         search(title);
//         setVisible(true);
//       } else {
//         setVisible(false);
//         setSearchProducts([]);
//       }
//     }
//   };

//   const handleClick = (setFieldValue, title, _id) => {
//     setVisible(false);
//     setFieldValue("_id", _id);
//     setFieldValue("title", title);
//   };

//   return (
//     <div>
//       <Formik
//         enableReinitialize={true}
//         initialValues={initialValues}
//         onSubmit={(values, { resetForm, setSubmitting }) => {
//           handleSubmit();
//           console.log(date);
//           console.log(values);
//           console.log(summary);
//           setSubmitting(false);
//           resetForm();
//         }}
//         onChange={(e) => console.log(e)}
//         validationSchema={schema}
//       >
//         {({ setFieldValue }) => (
//           <div>
//             <FormWrapper onChange={handleChange}>
//               <NameInput
//                 type="title"
//                 placeholder="Enter product name"
//                 name="title"
//                 autoComplete="off"
//               />
//               <ErrorMessage name="title" component={NameError} />
//               <GramsInput
//                 type="weight"
//                 placeholder="Gramskilos"
//                 name="weight"
//                 autoComplete="off"
//               />
//               <ErrorMessage name="weight" component={GramsError} />
//               {mobile ? (
//                 <Button type="submit">Add</Button>
//               ) : (
//                 <Button type="submit">
//                   add
//                   {/* <img src={AddIcon} alt="add product" /> NO OLIVDAR SVG*/}
//                 </Button>
//               )}
//             </FormWrapper>
//             <SearchBox className={visible ? "visible" : null}>
//               {searchProducts !== "" &&
//                 searchProducts.length !== 0 &&
//                 searchProducts.map((product) => {
//                   {
//                     /* if (
//                     userInfo.notAllowedProductsAll.find(
//                       (el) => el === product.title
//                     )
//                   ) {
//                     return (
//                       <SearchItemNotRecommended
//                         key={product._id}
//                         onClick={() =>
//                           handleClick(setFieldValue, product.title)
//                         }
//                       >
//                         {product.title.ua}
//                       </SearchItemNotRecommended>
//                     );
//                   } */
//                   }
//                   return (
//                     <SearchItem
//                       key={product._id}
//                       onClick={() =>
//                         handleClick(setFieldValue, product.title, product._id)
//                       }
//                     >
//                       {product.title}
//                     </SearchItem>
//                   );
//                 })}
//             </SearchBox>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };
const schema = yup.object().shape({
  productName: yup.string().required("Name is required field"),
  productWeight: yup
    .number("Grams must be a number")
    .typeError("Grams must be a number")
    .required("Grams is required field"),
});

export const DiaryAddProductForm = ({ onClose, isModalOpened }) => {
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const mobile = useMediaQuery({ query: "(max-width: 426px)" });
  const initialValues = {
    productName: "",
    productWeight: "",
  };
  const [searchProducts, setSearchProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [products, setProducts ] = useState([]);
  const userInfo = useSelector(authSelectors.getFullUser);

  const search = async (value) => {
    try {
      const result = await searchProduct(value);
      setSearchProducts(result);
    } catch (error) {
      setSearchProducts([]);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    schema.validate(values);
    const { productName, productWeight } = values;
    const body = { productName, productWeight: parseInt(productWeight), date };
    try {
      const result = await addProductForUser(body, token, date);
      if (result.length > 0) {
        dispatch(setProduct(result));
        
      } else {
        dispatch(setProduct([]));
      }
    } catch (error) {
      alert("Oops.. Product not found!");
    }
    mobile && onClose();
    resetForm();
  };

  const handleChange = (e) => {
    const productName = e.target.value;
    if (e.target.name === "productName") {
      if (productName !== "" && productName.length > 1) {
        search(productName);
        setVisible(true);
      } else {
        setVisible(false);
        setSearchProducts([]);
      }
    }
  };

  const handleClick = (setFieldValue, title) => {
    setVisible(false);
    setFieldValue("productName", title);
  };

  return (
    <div >
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ formikProps, setFieldValue }) => (
          <div>
            <FormWrapper onChange={handleChange}>
              <NameInput
                type="productName"
                placeholder="Enter product name"
                name="productName"
                autoComplete="off"
              />
              <ErrorMessage name="productName" component={NameError} />
              <GramsInput
                type="productWeight"
                placeholder="Grams"
                name="productWeight"
                autoComplete="off"
              />
              <ErrorMessage name="productWeight" component={GramsError} />
              {mobile ? (
                <Button type="submit">Add</Button>
              ) : (
                <Button type="submit">
                  <p>

                  additem
                  </p>
                </Button>
              )}
            </FormWrapper>
            <SearchBox className={visible ? "visible" : null}>
              {searchProducts !== "" &&
                searchProducts.length !== 0 &&
                searchProducts.map((product) => {
                  {/* if (
                    userInfo.notRecFood.find(
                      (el) => el === product.title
                    )
                  ) {
                    return (
                      <SearchItemNotRecommended
                        key={product._id}
                        onClick={() =>
                          handleClick(setFieldValue, product.title)
                        }
                      >
                        {product.title}
                      </SearchItemNotRecommended>
                    );
                  } */}
                  return (
                    <SearchItem
                      key={product._id}
                      onClick={() =>
                        handleClick(setFieldValue, product.title)
                      }
                    >
                      {product.title}
                    </SearchItem>
                  );
                })}
            </SearchBox>
          </div>
        )}
      </Formik>
    </div>
  );
};
