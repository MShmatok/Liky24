import React from 'react';
import {
  FormLabel,
  InputError,
  InputSettingEdit,
  UseProfileContainer,
  UseProfileLeft,
  UseProfileRight,
  UseProfileWrapper,
  UserProfileTitle,
} from './UseProfileSection.styled';

const UseProfileSection = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <UseProfileContainer>
      <UserProfileTitle>Your contact information</UserProfileTitle>
      <UseProfileWrapper>
        <UseProfileLeft>
          <FormLabel $fontSize="18px" $fontWeight="500">
            Name
            <InputSettingEdit
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={touched.name && errors.name}
            />
            {touched.name && errors.name && (
              <InputError>{errors.name}</InputError>
            )}
          </FormLabel>

          <FormLabel $fontSize="18px" $fontWeight="500">
            E-mail
            <InputSettingEdit
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <InputError>{errors.email}</InputError>
            )}
          </FormLabel>
        </UseProfileLeft>
        <UseProfileRight>
          <FormLabel $fontSize="18px" $fontWeight="500">
            Phone
            <InputSettingEdit
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={touched.phone && errors.phone}
            />
            {touched.phone && errors.phone && (
              <InputError>{errors.phone}</InputError>
            )}
          </FormLabel>

          <FormLabel $fontSize="18px" $fontWeight="500">
            Address
            <InputSettingEdit
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={touched.address && errors.address}
            />
            {touched.address && errors.address && (
              <InputError>{errors.address}</InputError>
            )}
          </FormLabel>
        </UseProfileRight>
      </UseProfileWrapper>
      <UserProfileTitle>Your order:</UserProfileTitle>
    </UseProfileContainer>
  );
};

export default UseProfileSection;
