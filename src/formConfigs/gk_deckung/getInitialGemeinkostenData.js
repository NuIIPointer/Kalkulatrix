import { v4 as uuid } from 'uuid';

export const getInitialGemeinkostenItem = () => {
  return {
    itemId: uuid()
  };
};

export const getInitialGemeinkostenCategory = () => {
  return {
    categoryId: uuid(),
    fields: [getInitialGemeinkostenItem()]
  };
};
