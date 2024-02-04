import { useTheme } from '@mui/material/styles';

import Annahmen from 'formConfigs/annahmen/Form/index';
import annahmenValidationRules from 'formConfigs/annahmen/rules/validation/index';
import annahmenConditionalRules from 'formConfigs/annahmen/rules/conditional/index';
import PersonalkostenProduktiv from 'formConfigs/pk_produktiv/Form/index';
import personalkostenProduktivValidationRules from 'formConfigs/pk_produktiv/rules/validation/index';
import personalkostenProduktivConditionalRules from 'formConfigs/pk_produktiv/rules/conditional/index';
import PersonalkostenAllgemein from 'formConfigs/pk_allgemein/Form/index';
import personalkostenAllgemeinValidationRules from 'formConfigs/pk_allgemein/rules/validation/index';
import personalkostenAllgemeinConditionalRules from 'formConfigs/pk_allgemein/rules/conditional/index';
import Gemeinkosten from 'formConfigs/gemeinkosten/Form/index';
import gemeinkostenValidationRules from 'formConfigs/gemeinkosten/rules/validation/index';
import gemeinkostenConditionalRules from 'formConfigs/gemeinkosten/rules/conditional/index';
import GKDeckung from 'formConfigs/gk_deckung/Form/index';
import gKDeckungValidationRules from 'formConfigs/gk_deckung/rules/validation/index';
import gKDeckungConditionalRules from 'formConfigs/gk_deckung/rules/conditional/index';
import GKStundensaetze from 'formConfigs/gk_stundensaetze/Form/index';
import gKStundensaetzeValidationRules from 'formConfigs/gk_stundensaetze/rules/validation/index';
import gKStundensaetzeConditionalRules from 'formConfigs/gk_stundensaetze/rules/conditional/index';
import StdVerrechnungssaetze from 'formConfigs/std_verrechnungssaetze/Form/index';
import stdVerrechnungssaetzeValidationRules from 'formConfigs/std_verrechnungssaetze/rules/validation/index';
import stdVerrechnungssaetzeConditionalRules from 'formConfigs/std_verrechnungssaetze/rules/conditional/index';
import Deckungsbeitraege from 'formConfigs/deckungsbeitraege/Form/index';
import deckungsbeitraegeValidationRules from 'formConfigs/deckungsbeitraege/rules/validation/index';
import deckungsbeitraegeConditionalRules from 'formConfigs/deckungsbeitraege/rules/conditional/index';

const useFormLiteral = () => {
  const theme = useTheme();

  return {
    annahmen: {
      linkPart: 'annahmen',
      content: <Annahmen />,
      title: 'Annahmen',
      rules: annahmenValidationRules,
      conditional: annahmenConditionalRules
    },
    pk_produktiv: {
      linkPart: 'pk_produktiv',
      content: <PersonalkostenProduktiv />,
      title: 'Personalkosten produktiv',
      rules: personalkostenProduktivValidationRules,
      conditional: personalkostenProduktivConditionalRules
    },
    pk_allgemein: {
      linkPart: 'pk_allgemein',
      content: <PersonalkostenAllgemein />,
      title: 'Personalkosten allgemein',
      rules: personalkostenAllgemeinValidationRules,
      conditional: personalkostenAllgemeinConditionalRules
    },
    gemeinkosten: {
      linkPart: 'gemeinkosten',
      content: <Gemeinkosten />,
      title: 'Gemeinkosten',
      rules: gemeinkostenValidationRules,
      conditional: gemeinkostenConditionalRules
    },
    gk_deckung: {
      linkPart: 'gk_deckung',
      content: <GKDeckung />,
      title: 'Gemeinkosten-Deckung',
      rules: gKDeckungValidationRules,
      conditional: gKDeckungConditionalRules
    },
    gk_stundensaetze: {
      linkPart: 'gk_stundensaetze',
      content: <GKStundensaetze />,
      title: 'Gemeinkosten-Stundensätze',
      rules: gKStundensaetzeValidationRules,
      conditional: gKStundensaetzeConditionalRules
    },
    std_verrechnungssaetze: {
      linkPart: 'std_verrechnungssaetze',
      content: <StdVerrechnungssaetze />,
      title: 'Std-Verrechnungssätze',
      rules: stdVerrechnungssaetzeValidationRules,
      conditional: stdVerrechnungssaetzeConditionalRules
    },
    deckungsbeitraege: {
      linkPart: 'deckungsbeitraege',
      content: <Deckungsbeitraege />,
      title: 'Deckungsbeiträge',
      backgroundColor: theme.palette.secondary.main,
      rules: deckungsbeitraegeValidationRules,
      conditional: deckungsbeitraegeConditionalRules
    }
  };
};

export default useFormLiteral;
