import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import debounce from 'lodash.debounce';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LinearProgress from '@mui/material/LinearProgress';
import { ImPlus } from 'react-icons/im';
import { changeToggle } from "../../redux/dairy/dairyReducer";
import { fetchProducts, addProduct, } from '../../redux/dairy/dairyOperations';
import { toast } from 'react-toastify';
import { getProducts, getDate, getToggle, getError, } from '../../redux/dairy/dairySelector';
import { DivWrapper } from '../DiaryProductForm/DiaryProductFormStyle';

export default function ProductForm() {
  const [value, setValue] = useState(null);
  const [productId, setProductId] = useState('');
  const [productWeight, setWeight] = useState('');

  const weight = Math.floor(productWeight)
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const date = useSelector(getDate);
  const toggle = useSelector(getToggle);
  let error = useSelector(getError);

  const findProduct = value => {
    dispatch(fetchProducts(value));
  };

  const debouncedFindProduct = debounce(findProduct, 400);

  function onSubmit() {
    if (productId === '') {
      return toast.warning('Select a product!');
    }
    if (productWeight <= 0) {
      return toast.warning('Specify the weight of the product!');
    }

    if (productId !== '' && productWeight >= 1) {
      dispatch(addProduct({ date, productId, productWeight: weight }));
      if (error) { return }

      setProductId('');
      setWeight('');
      setValue('');
    }
  }
  
  const onChangeProduct = e => {
    if (e.currentTarget.value !== '')
      debouncedFindProduct(e.currentTarget.value);
  };

  const onChangeWeight = e => {
    const { value } = e.currentTarget;
    if (value > 0) {
      return setWeight(value);
    }
    if (value === '') {
      setWeight('');
    }
  };

  const validationWeight = e => {
    e.target.value = Math.max(0, parseInt(e.target.value))
      .toString()
      .slice(0, 4);
  };

  return (
    <DivWrapper display={toggle ? 'block' : 'none'}>
      <Formik
        initialValues={{ product: '', weight: '' }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          onSubmit();
          if (isMobile && productId !== '' && productWeight >= 1) {
            dispatch(changeToggle(false));
          }
          setSubmitting(false);
          resetForm();
        }}
        onChange={e => console.log(e)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Autocomplete
                isOptionEqualToValue={(option, value) =>
                  option.iso === value.iso
                }
                autoSelect
                selectOnFocus
                id="product"
                name="product"
                options={products}
                value={value}
                noOptionsText={'Product not found'}
                onChange={(e, v) => {
                  if (v === null) {
                    setValue(v);
                    setProductId('');
                  }
                  if (v && v.id) {
                    setProductId(v.id);
                    setValue(v);
                  }
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    fullWidth
                    onChange={onChangeProduct}
                    label="Enter the name of the product"
                  />
                )}
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="weight"
                name="weight"
                type="number"
                value={productWeight}
                onInput={validationWeight}
                onChange={onChangeWeight}
                label="Weigh the product"
              />
            </div>
            {isSubmitting && <LinearProgress />}
            <button
              type="submit"
              disabled={isSubmitting}
            >
              
                <p>Add</p>
              
                <ImPlus
                  width="20"
                  height="20"
                />
            
            </button>
          </Form>
        )}
      </Formik>
    </DivWrapper>
  );
}