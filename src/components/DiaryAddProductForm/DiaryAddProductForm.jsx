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
import { getDate } from "../../redux/dairy/dairySelector";
import { fetchProducts } from "../../redux/dairy/dairyOperations";
import {
  addProductForUser,
  searchProduct,
} from "../../redux/services/api-reguest";
import authSelectors from "../../redux/auth/selectors";

const schema = yup.object().shape({
  productName: yup.string().required("Name is required field"),
  productWeight: yup
    .number("Grams must be a number")
    .typeError("Grams must be a number")
    .required("Grams is required field"),
});

export const DiaryAddProductForm = ({ onClose }) => {
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
        dispatch(fetchProducts(result));
      } else {
        dispatch(fetchProducts([]));
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
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ setFieldValue }) => (
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
                placeholder="Gramskilos"
                name="productWeight"
                autoComplete="off"
              />
              <ErrorMessage name="productWeight" component={GramsError} />
              {mobile ? (
                <Button type="submit">Add</Button>
              ) : (
                <Button type="submit">
                  {/* <img src={AddIcon} alt="add product" /> NO OLIVDAR SVG*/}
                </Button>
              )}
            </FormWrapper>
            <SearchBox className={visible ? "visible" : null}>
              {searchProducts !== "" &&
                searchProducts.length !== 0 &&
                searchProducts.map((product) => {
                  if (
                    userInfo.notAllowedProductsAll.find(
                      (el) => el === product.title.ua
                    )
                  ) {
                    return (
                      <SearchItemNotRecommended
                        key={product._id}
                        onClick={() =>
                          handleClick(setFieldValue, product.title.ua)
                        }
                      >
                        {product.title.ua}
                      </SearchItemNotRecommended>
                    );
                  }
                  return (
                    <SearchItem
                      key={product._id}
                      onClick={() =>
                        handleClick(setFieldValue, product.title.ua)
                      }
                    >
                      {product.title.ua}
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
