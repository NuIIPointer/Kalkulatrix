import { object, number } from 'yup';

const validationSchema = object().shape({
  auswahl_methode: number()
});

export default validationSchema;
