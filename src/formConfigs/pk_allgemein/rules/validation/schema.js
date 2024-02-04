import { object, number, string, array } from 'yup';

const validationSchema = object().shape({
  pk_allgemein_K6: number().nullable().min(0, 'Mindestens 0.').required('Geben Sie einen Wert an.'),
  pk_allgemein_K7: number().nullable().min(0, 'Mindestens 0.'),
  pk_allgemein_K78: number()
    .nullable()
    .min(0, 'Mindestens 0.')
    .max(20, 'Geben Sie einen realistischen Wert an.')
    .required('Geben Sie einen Wert an.'),
  pk_allgemein_mitarbeiter: array().of(
    object().shape({
      groupTitle: string(),
      fields: array().of(
        object().shape({
          vorname: string(),
          nachname: string(),
          F14: number().required('Geben Sie einen Monat an.').min(1, 'Mindestens 1.'),
          G14: number().required('Geben Sie einen Monat an.').min(1, 'Mindestens 12.').max(12, 'Maximal 12'),
          I14: number()
            .required('Geben Sie das Bruttoeinkommen an.')
            .max(9999999, 'Geben Sie einen realistischen Wert an.')
            .min(0, 'Mindestens 0.'),
          K14: number().min(0, 'Mindestens 0.')
        })
      )
    })
  )
});

export default validationSchema;
