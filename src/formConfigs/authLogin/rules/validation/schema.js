import { object, string, ref } from 'yup';

const validationSchema = object().shape({
  email: string().email('Geben Sie eine gültige Email an.').required('Geben Sie eine Email an.'),
  emailConfirm: string().oneOf([ref('email'), null], 'Die Emails müssen übereinstimmen.'),
  password: string().required('Geben Sie ein Passwort an.').min(8, 'Das Passwort muss mindestens 8 Zeichen lang sein.'),
  passwordConfirm: string().oneOf([ref('password'), null], 'Die Passwörter müssen übereinstimmen.')
});

export default validationSchema;
