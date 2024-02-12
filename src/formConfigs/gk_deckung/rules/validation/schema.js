import { object, number, string, array } from 'yup';

const validationSchema = object().shape({
  gk_deckung_zuschlaege: array().of(
    object().shape({
      groupTitle: string(),
      fields: array().of(
        object().shape({
          D8: string().required('Geben Sie Eine Bezeichnung an.'),
          E8: number().required('Geben Sie einen Wert an.'),
          F8: number().min(0, 'Geben Sie einen gültigen Wert an.')
        })
      )
    })
  )
});

export default validationSchema;
