import { SectionST } from 'pages/shop/Shop.styled';
import React from 'react';
import { ContainerMainSection } from './Cart.styled';
import CartSection from 'components/cartSection/CartSection';
import TotalSection from 'components/totalSection/TotalSection';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { userProfileSchema } from '../../js/validation/schemas';
import UseProfileSection from 'components/useProfileSection/UseProfileSection';
import { selectPreOrder } from '../../redux/data/selectors';
import { fetchSendDataThunk } from '../../redux/data/thunk';

const Cart = () => {
  const dispatch = useDispatch();
  const preOrder = useSelector(selectPreOrder);

  const sendAndClear = (user, preOrder) => {
    dispatch(fetchSendDataThunk({ ...user, order: preOrder }));
  };
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
    },
    validationSchema: userProfileSchema,
    onSubmit: values => {
      sendAndClear(values, preOrder);
      resetForm();
    },
  });

  return (
    <>
      <div className="container">
        <SectionST>
          <form onSubmit={handleSubmit}>
            {preOrder.length ? (
              <>
                <ContainerMainSection>
                  <UseProfileSection
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                  />
                  <CartSection />
                </ContainerMainSection>
                <TotalSection handleSubmit={handleSubmit} />
              </>
            ) : (
              <p>Cart is empty</p>
            )}
          </form>
        </SectionST>
      </div>
    </>
  );
};

export default Cart;
