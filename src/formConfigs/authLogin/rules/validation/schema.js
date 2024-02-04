import { object, string } from 'yup';

const validationSchema = object().shape({
  email: string().email('Geben Sie eine gültige Email an.').required('Geben Sie eine Email an.'),
  password: string().required('Geben Sie ein Passwort an.')
});

export default validationSchema;
