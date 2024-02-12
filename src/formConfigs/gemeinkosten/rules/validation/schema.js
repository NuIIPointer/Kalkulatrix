import { sachkosten_fieldTitles, sachkosten_startingRow } from 'formConfigs/gemeinkosten/Form/Sachkosten';
import { object, number } from 'yup';

const sachkostenConfig = {};
sachkosten_fieldTitles.forEach((_title, index) => {
  const row = sachkosten_startingRow + index;
  sachkostenConfig[`gemeinkosten_sachkosten_F${row}`] = number().min(0, 'Geben Sie einen gültigen Wert an.');
  sachkostenConfig[`gemeinkosten_sachkosten_G${row}`] = number()
    .min(0, 'Geben Sie einen gültigen Wert an.')
    .max(100, 'Geben Sie einen gültigen Wert an.');
});

const validationSchema = object().shape({
  gemeinkosten_material_F9: number().min(0, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_material_G9: number().min(0, 'Geben Sie einen gültigen Wert an.').max(100, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_material_F10: number().min(0, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_material_G10: number().min(0, 'Geben Sie einen gültigen Wert an.').max(100, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_material_F11: number().min(0, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_material_G11: number().min(0, 'Geben Sie einen gültigen Wert an.').max(100, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_personal_G15: number().min(0, 'Geben Sie einen gültigen Wert an.').max(100, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_personal_G16: number().min(0, 'Geben Sie einen gültigen Wert an.').max(100, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_personal_F17: number().min(0, 'Geben Sie einen gültigen Wert an.'),
  gemeinkosten_personal_G17: number().min(0, 'Geben Sie einen gültigen Wert an.').max(100, 'Geben Sie einen gültigen Wert an.'),
  ...sachkostenConfig,
  gemeinkosten_I51: number().min(0, 'Geben Sie einen gültigen Wert an.')
});

export default validationSchema;
