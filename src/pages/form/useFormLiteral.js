import { useTheme } from '@mui/material/styles';

import Annahmen from 'formConfigs/annahmen/Form/index';
import annahmenValidationSchema from 'formConfigs/annahmen/rules/validation/schema';
import PersonalkostenProduktiv from 'formConfigs/pk_produktiv/Form/index';
import personalkostenProduktivValidationSchema from 'formConfigs/pk_produktiv/rules/validation/schema';
import PersonalkostenAllgemein from 'formConfigs/pk_allgemein/Form/index';
import personalkostenAllgemeinValidationSchema from 'formConfigs/pk_allgemein/rules/validation/schema';
import Gemeinkosten from 'formConfigs/gemeinkosten/Form/index';
import gemeinkostenValidationSchema from 'formConfigs/gemeinkosten/rules/validation/schema';
import GKDeckung from 'formConfigs/gk_deckung/Form/index';
import gKDeckungValidationSchema from 'formConfigs/gk_deckung/rules/validation/schema';
// import GKStundensaetze from 'formConfigs/gk_stundensaetze/Form/index';
// import gKStundensaetzeValidationSchema from 'formConfigs/gk_stundensaetze/rules/validation/schema';
import StdVerrechnungssaetze from 'formConfigs/std_verrechnungssaetze/Form/index';
import stdVerrechnungssaetzeValidationSchema from 'formConfigs/std_verrechnungssaetze/rules/validation/schema';
import Deckungsbeitraege from 'formConfigs/deckungsbeitraege/Form/index';
import deckungsbeitraegeValidationSchema from 'formConfigs/deckungsbeitraege/rules/validation/schema';

const useFormLiteral = () => {
  const theme = useTheme();

  return {
    annahmen: {
      linkPart: 'annahmen',
      content: <Annahmen />,
      validationSchema: annahmenValidationSchema,
      title: 'Allgemeine Unternehmensangaben'
    },
    pk_produktiv: {
      linkPart: 'pk_produktiv',
      content: <PersonalkostenProduktiv />,
      validationSchema: personalkostenProduktivValidationSchema,
      title: 'Personalkosten produktive Abteilungen'
    },
    pk_allgemein: {
      linkPart: 'pk_allgemein',
      content: <PersonalkostenAllgemein />,
      validationSchema: personalkostenAllgemeinValidationSchema,
      title: 'Personalkosten allgemeiner Bereich'
    },
    gemeinkosten: {
      linkPart: 'gemeinkosten',
      content: <Gemeinkosten />,
      validationSchema: gemeinkostenValidationSchema,
      title: 'Betriebskosten'
    },
    gk_deckung: {
      linkPart: 'gk_deckung',
      content: <GKDeckung />,
      validationSchema: gKDeckungValidationSchema,
      title: 'Betriebskosten-Deckung'
    },
    // gk_stundensaetze: {
    //   linkPart: 'gk_stundensaetze',
    //   content: <GKStundensaetze />,
    //   validationSchema: gKStundensaetzeValidationSchema,
    //   title: 'Gemeinkosten-Stundensätze'
    // },
    std_verrechnungssaetze: {
      linkPart: 'std_verrechnungssaetze',
      content: <StdVerrechnungssaetze />,
      validationSchema: stdVerrechnungssaetzeValidationSchema,
      title: 'Stundensatz & Deckungsbeiträge'
    },
    deckungsbeitraege: {
      linkPart: 'deckungsbeitraege',
      content: <Deckungsbeitraege />,
      validationSchema: deckungsbeitraegeValidationSchema,
      title: 'Deckungsbeiträge',
      backgroundColor: theme.palette.secondary.main
    }
  };
};

export default useFormLiteral;
