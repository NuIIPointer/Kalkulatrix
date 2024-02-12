import { object, number } from 'yup';

const validationSchema = object().shape({
  gk_stundensaetze_H14: number().required('Geben Sie einen Plangewinn an.').min(0, 'Geben Sie einen gültigen Wert an.')
});

export default validationSchema;
