import { object, number } from 'yup';

const validationSchema = object().shape({
  deckungsbeitraege_J25: number()
    .required('Geben Sie einen theoretisch erzielbaren Nettoverkaufspreis pro Std. an.')
    .min(0, 'Geben Sie einen gültigen Wert an.')
});

export default validationSchema;
