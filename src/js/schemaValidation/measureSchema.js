import * as yup from 'yup';

export const measureSchema = yup.object().shape({
  height: yup.number().min(0).max(300).required(),
  currentWeight: yup.number().min(0).max(300).required(),
});
