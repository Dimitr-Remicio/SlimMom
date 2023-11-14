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
  // SearchItemNotRecommended,
} from "./DiaryAddProductForm.styled";
// import AddIcon from "../../images/svg/add.svg"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // getProducts,
  getDate,
  // getSummary,
  // getToggle,
  // getError,
} from "../../redux/dairy/dairySelector";
import { setProduct } from "../../redux/dairy/dairyReducer";
//
// import { addProduct, fetchDairy } from "../../redux/dairy/dairyOperations";
import {
  addProductForUser,
  searchProduct,
  // getDairy,
} from "../../redux/services/api-reguest";
// import calcSelectors from "../../redux/calculatorSlice/calculatorSelectors";

// import authSelectors from "../../redux/auth/selectors";
// import Notiflix from "notiflix";
// import { result } from "lodash";
// import { format, parse } from "date-fns";
// import { setSummaryId } from "../../redux/dairy/dairyReducer";

const schema = yup.object().shape({
  productName: yup.string().required("Name is required field"),
  productWeight: yup
    .number("Grams must be a number")
    .typeError("Grams must be a number")
    .required("Grams is required field"),
});

export const DiaryAddProductForm = ({ onClose }) => {
  // const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const mobile = useMediaQuery({ query: "(max-width: 426px)" });
  const initialValues = {
    idItem: "",
    productName: "",
    productWeight: "",
  };
  // const { user } = useSelector(calcSelectors.getUserData);
  const [searchProducts, setSearchProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  // const [products, setProducts] = useState([]);

  const search = async (value) => {
    try {
      const result = await searchProduct(value);
      // console.log(result)
      setSearchProducts(result);
    } catch (error) {
      setSearchProducts([]);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    schema.validate(values);

    const { productName, productWeight, idItem } = values;
    const idForAdd = await searchProduct(idItem);
    console.log(idItem);
    // const id = idForAdd[0]._id;
    const nDate = date;
    // console.log(idForAdd);

    const body = {
      productId: `${id}`,
      weight: parseInt(productWeight),
      date: `${nDate}`,
    };

    try {
      const result = await addProductForUser(body);
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

  const handleClick = (setFieldValue, title, _id) => {
    setVisible(false);
    setFieldValue("idItem", _id);
    setFieldValue("productName", title);
    console.log(_id);
  };
  const hideItem = () => {
    setVisible(false);
  };
  const showItem = () => {
    setVisible(true);
  };

  return (
    <div className="diaryBlock">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ formikProps, setFieldValue }) => (
          <div>
            <FormWrapper onChange={handleChange} className="inpustadd">
              <NameInput
                type="productName"
                placeholder="Enter product name"
                name="productName"
                autoComplete="off"
              />
              <button className="showSearch" onClick={() => showItem()} >▼</button>
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
                  <p>additem</p>
                </Button>
              )}
            </FormWrapper>
            <SearchBox className={visible ? "visible" : null}>
              <div className="scrollWrapper" id="style-3">
                <div className="wrapHeadSearch">
                  <p className="titleSearch">Search</p>
                  <button className="closeSearch" onClick={() => hideItem()}>
                    X
                  </button>
                </div>
                {searchProducts !== "" &&
                  searchProducts.length !== 0 &&
                  searchProducts.map((product) => {
                    return (
                      <>
                        <SearchItem
                          key={product._id}
                          onClick={() =>
                            handleClick(
                              setFieldValue,
                              product.title,
                              product._id
                            )
                          }
                        >
                          {product.title}
                        </SearchItem>
                      </>
                    );
                  })}
              </div>
            </SearchBox>
          </div>
        )}
      </Formik>
    </div>
  );
};
