import { object, number, array } from 'yup';

const validationSchema = object().shape({
  annahmen_allgemein_planjahr: number().required('Geben Sie ein Planjahr an.').min(2000, 'Geben Sie ein gültiges Jahr nach 2000 an.'),
  annahmen_E41: number().required('Geben Sie einen Wert an.'),
  annahmen_G16: number().required('Geben Sie einen Wert an.'),
  annahmen_G17_days: array().min(1, 'Wählen Sie mindestens einen Wochenarbeitstag aus.').required('Wählen Sie mindestens einen Wochenarbeitstag aus.')
});

export default validationSchema;
