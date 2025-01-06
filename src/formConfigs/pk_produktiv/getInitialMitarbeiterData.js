import { v4 as uuid } from 'uuid';

const getInitialMitarbeiterData = (values) => {
  return {
    userId: uuid(),
    N9: 100,
    E9: Math.round(values?.annahmen_H23 || 0),
    F9: Math.round((values?.annahmen_G26 || 0) * (values?.annahmen_G18 || 0)),
    G9: Math.round((values?.annahmen_G27 || 0) * (values?.annahmen_G18 || 0)),
    I9: Math.round((values?.annahmen_G28 || 0) * (values?.annahmen_G18 || 0)),
    H9: 0
  };
};

export default getInitialMitarbeiterData;
