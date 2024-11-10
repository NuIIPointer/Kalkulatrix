import { object, number } from 'yup';

const validationSchema = object().shape({
  annahmen_allgemein_planjahr: number().required('Geben Sie ein Planjahr an.').min(2000, 'Geben Sie ein gültiges Jahr nach 2000 an.'),
  annahmen_E41: number().required('Geben Sie einen Wert an.'),
  annahmen_G16: number().required('Geben Sie einen Wert an.'),
  annahmen_G17_days: number().required('Geben Sie einen Wert an.').min(1, 'Geben Sie eine gültige Anzahl an Wochenarbeitstagen an.')
});

export default validationSchema;
