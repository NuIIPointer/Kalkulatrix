import { object, number, string, array } from 'yup';

const validationSchema = object().shape({
  pk_produktiv_mitarbeiter: array().of(
    object().shape({
      groupTitle: string(),
      fields: array().of(
        object().shape({
          vorname: string(),
          nachname: string(),
          E9: number().required('Geben Sie einen Wert an.'),
          F9: number().required('Geben Sie einen Wert an.'),
          G9: number().required('Geben Sie einen Wert an.'),
          H9: number(),
          I9: number(),
          N9: number().required('Geben Sie einen Wert an.'),
          Q9: number().required('Geben Sie einen Wert an.'),
          R9: number()
        })
      )
    })
  )
});

export default validationSchema;
