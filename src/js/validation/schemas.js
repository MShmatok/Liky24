import * as yup from 'yup';

const emailPattern = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const userProfileSchema = yup.object().shape({
  name: yup
    .string()
    .max(32, 'Max length 32')
    .required('Required field!')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$/,
      'Name should only contain letters (Latin, Ukrainian or Cyrillic)'
    ),
  email: yup
    .string()
    .required('Required field!')
    .matches(emailPattern, 'Email is not valid'),
  phone: yup
    .string()
    .required('Required field!')
    .max(32, 'Max length 32')
    .matches(
      /^(?:\+)?(?:[0-9] ?){6,14}[0-9]$/,
      'Name should only contain number'
    ),
  address: yup.string().required('Required field!').max(500, 'Max length 500'),
});
