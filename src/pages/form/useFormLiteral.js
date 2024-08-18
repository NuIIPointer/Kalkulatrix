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
      title: 'Allgemeine Unternehmensangaben',
      description:
        'Bitte tragen Sie hier Ihre Unternehmensdaten, Arbeitszeiten sowie Lohnnebenkosten ein. Diese Angaben dienen zum einen zur Ermittlung der jährlichen Arbeitszeit und zur Vorbelegung von bspw. Urlaubstagen für die Anlagen ihrer Mitarbeiter.'
    },
    pk_produktiv: {
      linkPart: 'pk_produktiv',
      content: <PersonalkostenProduktiv />,
      validationSchema: personalkostenProduktivValidationSchema,
      title: 'Personalkosten produktive Abteilungen',
      description:
        'Bitte erfassen Sie hier die verschiedenen Abteilungen und Mitarbeiter Ihres Betriebs, welche produktive Arbeit verrichten. Über den Reiter „Neue Gruppe“ können sie beliebig viele Abteilungen hinzufügen. Beachten Sie, dass hier lediglich die Mitarbeiter erfasst werden sollten, deren Arbeitsleistung direkt an den Kunden verrechenbar ist z.B. Mitarbeiter einer Werkstatt. Mitarbeiter aus verwaltenden Bereichen werden hier NICHT erfasst.'
    },
    pk_allgemein: {
      linkPart: 'pk_allgemein',
      content: <PersonalkostenAllgemein />,
      validationSchema: personalkostenAllgemeinValidationSchema,
      title: 'Personalkosten allgemeiner Bereich',
      description:
        'Bitte erfassen Sie nun die verwaltenden Abteilungen ihres Unternehmens (nicht produktiv). Dies können bspw. Buchhaltung, Geschäftsführung, IT, etc. sein. Die Erfassung dieser Mitarbeiter ist für die Kalkulation des Stundensatzes essentiell, da die Löhne dieser Mitarbeiter ebenfalls durch den Verkauf der Serviceleistung erwirtschaftet werden müssen.'
    },
    gemeinkosten: {
      linkPart: 'gemeinkosten',
      content: <Gemeinkosten />,
      validationSchema: gemeinkostenValidationSchema,
      title: 'Betriebskosten',
      description:
        'Nachdem ihre Personalkosten vollständig erfasst wurden, werden in diesem Abschnitt sämtliche Kosten erfasst, die in Ihrem Betrieb anfallen. Dies umfasst den Materialaufwand, welchen sie zur Durchführung ihrer Serviceleistung benötigen, Personalgemeinkosten, wo sie ggf. zusätzliche Kosten angegeben und die Variabilität der Löhne festlegen können, Betriebskosten wie z.B. Miete, Ausstattung, Versicherungen, etc. und kalkulatorische Kosten für Kredite oder sonstiges.'
    },
    gk_deckung: {
      linkPart: 'gk_deckung',
      content: <GKDeckung />,
      validationSchema: gKDeckungValidationSchema,
      title: 'Betriebskosten-Deckung',
      description: (
        <>
          Bitte tragen Sie hier ihre Erlöse ein, welche dazu beitragen, dass die Betriebskosten gedeckt werden. Sie können auch hier
          verschiedene Gruppen anlegen und dementsprechend ihre verkauften Produkte erfassen. Neben des Einkaufspreise geben sie bitte
          zusätzlich ihren Zuschlagssatz für das jeweilige Produkt ein.
          <br />
          <br />
          Beispiel für die Erfassung in einer Werkstatt: Gruppe: Ersatzteile Produkte: Bremsscheiben, Bremssattel, Glühlampe, etc. Gruppe:
          Öl- und Schmierstoffe Produkte: Motoröl, Getriebeöl, Achsöl, etc.
        </>
      )
    },
    // gk_stundensaetze: {
    //   linkPart: 'gk_stundensaetze',
    //   content: <GKStundensaetze />,
    //   validationSchema: gKStundensaetzeValidationSchema,
    //   title: 'Gemeinkosten-Stundensätze'
    // },
    // std_verrechnungssaetze: {
    //   linkPart: 'std_verrechnungssaetze',
    //   content: <StdVerrechnungssaetze />,
    //   validationSchema: stdVerrechnungssaetzeValidationSchema,
    //   title: 'Stundensatz & Deckungsbeiträge'
    // },
    deckungsbeitraege: {
      linkPart: 'deckungsbeitraege',
      content: <Deckungsbeitraege />,
      validationSchema: deckungsbeitraegeValidationSchema,
      title: 'Stundensatz & Deckungsbeiträge',
      description:
        'Sie haben die Kalkulation nun abgeschlossen. Mit Eingabe des Plangewinns für ihr Unternehmen können sie direkt sehen, welche Auswirkungen dieser auf den Stundensatz hat. Weiterhin finden sie hier die verschiedenen Kostensätze sowie ihre Deckungsbeiträge.',
      backgroundColor: theme.palette.secondary.main
    }
  };
};

export default useFormLiteral;
