# Kalkulatrix (Stundensatzrechner)

Ein React-basierter Stundensatz-Kalkulator für Freelancer und Selbstständige zur Berechnung von Stundensätzen, Gemeinkosten und Deckungsbeiträgen.

## Tech-Stack

- **Frontend**: React 18 mit Create React App
- **UI-Framework**: Material-UI (MUI) v5
- **State Management**: Redux Toolkit + React Context
- **Routing**: React Router v6
- **Backend/Auth**: Firebase (Authentication, Firestore, Functions)
- **Zahlungen**: Stripe (via Firebase Extension)
- **Formulare**: Formik + Yup Validation
- **Charts**: ApexCharts, MUI X Charts
- **Kalender**: FullCalendar
- **Animationen**: Framer Motion, React Spring, Lottie
- **Styling**: Emotion (CSS-in-JS)
- **Sprache**: JavaScript (mit TypeScript-Konfiguration vorhanden)

## Projektstruktur

```
src/
├── assets/           # Bilder, Icons, Lottie-Animationen
├── components/       # Wiederverwendbare UI-Komponenten
│   ├── @extended/    # Erweiterte Basis-Komponenten (AnimateButton, Transitions)
│   ├── formComponents/  # Formular-spezifische Komponenten
│   ├── cards/        # Card-Komponenten
│   └── ...           # Weitere UI-Komponenten
├── context/          # React Context Provider
│   ├── user/         # User-Authentifizierung und Formulardaten
│   ├── stripe/       # Stripe-Subscription-Management
│   ├── navigation/   # Navigation-State
│   └── admin/        # Admin-Funktionalitäten
├── formConfigs/      # Formular-Konfigurationen und Validierungen
│   ├── annahmen/     # Annahmen-Formular
│   ├── gemeinkosten/ # Gemeinkosten-Formular
│   ├── pk_allgemein/ # Personalkosten allgemein
│   ├── pk_produktiv/ # Personalkosten produktiv
│   ├── deckungsbeitraege/  # Deckungsbeiträge
│   └── std_verrechnungssaetze/  # Stunden-Verrechnungssätze
├── hooks/            # Custom React Hooks
├── layout/           # Layout-Komponenten
│   ├── MainLayout/   # Authentifiziertes Layout mit Drawer
│   ├── PublicLayout/ # Öffentliches Layout
│   └── MinimalLayout/# Minimales Layout (Login etc.)
├── menu-items/       # Navigation-Menü Konfiguration
├── pages/            # Seiten-Komponenten
│   ├── start/        # Landing Page
│   ├── authentication/  # Login, Register, Forgot Password
│   ├── dashboard/    # User Dashboard
│   ├── form/         # Formular-Seiten (Hauptfunktionalität)
│   ├── billing/      # Subscription/Billing
│   ├── profile/      # User Profile
│   ├── admin/        # Admin Dashboard
│   └── ...           # Weitere Seiten (FAQ, Impressum, etc.)
├── routes/           # Routing-Konfiguration
├── services/         # Externe Services
│   ├── firebase.js   # Firebase-Konfiguration und Auth-Funktionen
│   └── cookieconsent.js  # Cookie-Consent Management
├── store/            # Redux Store
├── styles/           # Globale CSS-Styles
├── themes/           # MUI Theme-Konfiguration
│   ├── overrides/    # Komponenten-Overrides
│   └── theme/        # Farbpalette
└── utils/            # Hilfsfunktionen
```

## Wichtige Dateien

| Datei | Beschreibung |
|-------|-------------|
| `src/App.js` | Haupt-App-Komponente mit Providern |
| `src/index.js` | Entry Point mit Redux/Router Setup |
| `src/config.js` | Theme-Konfiguration (Fonts, Layout-Konstanten) |
| `src/services/firebase.js` | Firebase-Initialisierung und Auth-Exports |
| `src/context/user/index.js` | UserContext mit Auth und Formular-CRUD |
| `src/context/stripe/index.js` | Stripe-Subscription-Logik |
| `src/routes/index.js` | Routing-Einstiegspunkt |

## Firebase-Integration

### Authentifizierung

- Email/Passwort-Authentifizierung
- Persistenz-Optionen (browserLocalPersistence, inMemoryPersistence)
- Email-Verifizierung

### Firestore Collections

- `users` - Benutzerprofile (firstName, lastName, company, userFormIds, isAdmin)
- `forms` - Formulardaten (title, type, values, creationDate, lastSaved)
- `users/{userId}/subscriptions` - Stripe-Subscriptions
- `users/{userId}/checkout_sessions` - Stripe Checkout Sessions

### Cloud Functions

- `ext-firestore-stripe-payments-createPortalLink` - Stripe Customer Portal

### Environment Variables (erforderlich)

```
REACT_APP_FIREBASE_APIKEY
REACT_APP_FIREBASE_AUTHDOMAIN
REACT_APP_FIREBASE_PROJECTID
REACT_APP_FIREBASE_STORAGEBUCKET
REACT_APP_FIREBASE_MESSAGINGSENDERID
REACT_APP_FIREBASE_APPID
```

## Stripe-Integration

Das Projekt nutzt die Firebase Stripe Extension für Subscription-Management.

### Subscription-Tiers

- **Free**: 1 Kalkulation
- **Pro** (prod_RFgQbyJhgjwWPa): 2 Kalkulationen
- **Premium** (prod_RND1xoBl19Y4PT): 1 Kalkulation
- **Enterprise** (prod_RjffeKdrDoeGcS): Unbegrenzt (-1)

### Flows

- Checkout Sessions werden in Firestore erstellt
- onSnapshot wartet auf URL-Generierung durch Firebase Extension
- Customer Portal für Subscription-Management

## Formular-System

### Struktur einer FormConfig

```
formConfigs/
└── [formName]/
    ├── Form/index.js     # Formular-Komponente
    └── rules/validation/schema.js  # Yup-Validierungsschema
```

### Formular-Typen

- `annahmen` - Grundannahmen
- `gemeinkosten` - Gemeinkostenberechnung
- `pk_allgemein` - Personalkosten (allgemein)
- `pk_produktiv` - Produktive Personalkosten
- `deckungsbeitraege` - Deckungsbeitragsrechnung
- `std_verrechnungssaetze` - Stundenverrechnungssätze

### Formular-Speicherung

- Formulare werden als JSON-String in Firestore gespeichert
- Automatische Zeitstempel (creationDate, lastSaved)

## Routing

### Öffentliche Routen (PublicLayout)

- `/` - Landing Page
- `/kontakt` - Kontaktseite
- `/enterprise` - Enterprise-Anfrage
- `/impressum` - Impressum
- `/datenschutz` - Datenschutz
- `/faq` - FAQ

### Geschützte Routen (MainLayout + ProtectedRoute)

- `/office/dashboard` - User Dashboard
- `/office/profile` - Profil-Einstellungen
- `/office/billing` - Subscription-Verwaltung
- `/office/events` - Kalender/Events
- `/office/form/overview` - Formular-Übersicht
- `/office/form/:formId/:formSection` - Formular-Bearbeitung
- `/office/admin/dashboard` - Admin Dashboard (nur isAdmin)

### Auth-Routen (MinimalLayout)

- `/login` - Login
- `/register` - Registrierung

## Context-System

Die App verwendet mehrere verschachtelte Context Provider:

```jsx
<ReduxProvider>
  <BrowserRouter>
    <AllContextsProvider>  {/* Kombiniert alle Context Provider */}
      <UserContextProvider>     {/* Auth, User-Daten, Formulare */}
      <NavigationContextProvider>  {/* Navigation-State */}
      <StripeContextProvider>   {/* Subscriptions */}
      <AdminContextProvider>    {/* Admin-Funktionen */}
      <App />
    </AllContextsProvider>
  </BrowserRouter>
</ReduxProvider>
```

## Entwicklung

### Befehle

```bash
npm start       # Entwicklungsserver starten
npm run build   # Produktions-Build erstellen
npm test        # Tests ausführen
npm run lint    # ESLint mit Auto-Fix
```

### Deployment

- GitHub Actions Workflow auf `main` Branch
- Build mit Node 16 und Yarn
- SSH Deploy zu Server (192.34.62.123)
- Deployment-Ziel: `public_html`

### Linting

- ESLint mit React-App Konfiguration
- Prettier für Code-Formatierung
- JSX-a11y für Accessibility

## Theme-System

### Schriftart

- Red Hat Display (in `public/fonts/`)

### Konfiguration

```js
// src/config.js
{
  defaultPath: '/',
  fontFamily: "'Red Hat Display', sans-serif",
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr'
}
```

### Layout-Konstanten

- `drawerWidth`: 320px
- `navHeight`: 60px
- `appDesignGutter`: 40px

## Konventionen

### Code-Style

- Funktionale Komponenten mit Hooks
- Lazy Loading für Seiten via `Loadable`
- MUI-Komponenten für UI
- Formik für Formulare mit Yup-Validierung

### Dateistruktur

- Komponenten in eigenen Ordnern mit `index.js`
- Validierungsschemas unter `rules/validation/schema.js`
- Context Provider exportieren Context und Provider

### Imports

- Absolute Imports via jsconfig.json konfiguriert
- Beispiel: `import ThemeCustomization from 'themes'`

## Wichtige Abhängigkeiten

| Paket | Version | Verwendung |
|-------|---------|------------|
| react | 18.2.0 | UI-Framework |
| @mui/material | 5.14.7 | UI-Komponenten |
| firebase | 10.1.0 | Backend/Auth |
| formik | 2.2.9 | Formular-Management |
| yup | 1.3.3 | Validierung |
| react-router-dom | 6.4.1 | Routing |
| @reduxjs/toolkit | 1.8.5 | State Management |
| dayjs | 1.11.10 | Datum-Handling |
| notistack | 3.0.1 | Snackbar-Notifications |
| vanilla-cookieconsent | 3.0.1 | GDPR-Consent |

## UI-Referenz & Seiten-Details

### Landing Page (`/`)

- Hero-Section mit Typewriter-Animation
- Feature-Cards (Gewinnsteigerung, Präzise Preise, Optimale Planung)
- Screenshot-Mockups der Anwendung
- Timeline "Erst kalkulieren, dann implementieren"
- Eingebettetes Calendly-Webinar-Formular (adel-consulting.com)
- Preiskarten (Pro, Premium, Enterprise)
- Footer mit Links zu Kontakt, FAQ, Impressum, Datenschutz, AGB

### Login (`/login`)

- E-Mail und Passwort-Felder
- "Angemeldet bleiben" Checkbox
- Link zu Passwort vergessen
- Link zur Registrierung

### Dashboard (`/office/dashboard`)

- Dropdown zur Auswahl der aktiven Kalkulation
- Statistik-Cards:
  - Aktueller Stundensatz
  - Auslastung
  - Ø-Marge auf Produkte
  - Anzahl Mitarbeiter
- Quick-Links: zu den Angaben, zum Profil, Kontaktieren
- Calendly-Kalender für Terminvereinbarung (benötigt Cookie-Consent)

### Formular-Übersicht (`/office/form/overview`)

- Liste aller Kalkulationen des Benutzers
- Pro Kalkulation:
  - Titel (z.B. "Kalkulation vom 26.03.2025")
  - Buttons: Formular kopieren, Formular löschen
  - Links zu allen 6 Formular-Blättern
- Button "Erstellen Sie eine neue Kalkulation"

### Kalkulations-Workflow (6 Schritte)

#### 1. Allgemeine Unternehmensangaben (`/office/form/:formId/annahmen`)

- **Unternehmensdaten**: Planjahr, Unternehmensname, Planungsverantwortlicher, Adresse, Bundesland
- **Arbeitszeiten**: Wochenarbeitsstunden, Urlaubstage (nur mit Abo)
- **Lohnnebenkosten**: Prozentsätze für Sozialabgaben

#### 2. Personalkosten produktive Abteilungen (`/office/form/:formId/pk_produktiv`)

- Tabs für verschiedene Abteilungen + Gesamt-Tab
- Statistik-Cards: Personalkosten, Auslastung, Kosten je Stunde, Mitarbeiteranzahl
- Mitarbeiter-Tabelle mit Spalten:
  - Mitarbeiter, Stundenlohn, Auslastung, Krankenzeit, Lohn (p.a.)
- Button "Neuen Mitarbeiter anlegen"
- Pagination für große Listen

#### 3. Personalkosten allgemeiner Bereich (`/office/form/:formId/pk_allgemein`)

- Gleiche Struktur wie pk_produktiv
- Für nicht-produktive Mitarbeiter (Verwaltung, etc.)

#### 4. Betriebskosten (`/office/form/:formId/gemeinkosten`)

- Eingabefelder für verschiedene Kostenkategorien
- Gemeinkostenberechnung

#### 5. Betriebskosten-Deckung (`/office/form/:formId/gk_deckung`)

- Berechnung der Deckung der Betriebskosten

#### 6. Stundensatz & Deckungsbeiträge (`/office/form/:formId/deckungsbeitraege`)

- **Plangewinn-Eingabe** (nur mit Abo)
- **Stundensatz-Ergebnis** (netto und inkl. USt.)
- Aufschlüsselung:
  - Personalkosten pro Stunde
  - Betriebskosten pro Stunde
  - Plangewinnsatz pro Stunde
  - Selbstkosten pro Stunde
- **Theoretischer erzielbarer Deckungsbeitrag**:
  - Erzielbarer Nettoverkaufspreis
  - Grenzkosten pro Stunde
  - Deckungsbeitrag pro Stunde
- **3 Deckungsbeitragsziele** mit Status (erreicht/nicht erreicht)

### Abonnement (`/office/billing`)

- Anzeige des aktuellen Abo-Status
- Preispläne-Auswahl (Monatlich, Halbjährlich, Jährlich)
- **Pro** (69€/Monat): Stundensatzkalkulation, Mitarbeiterkostenplanung, Produktmargenplanung
- **Premium** (299€/Monat): + Monatliches Beratungsgespräch, Schulungen, Priorisierter Support
- **Enterprise** (auf Anfrage): Unbegrenzte Kalkulationen, Vor-Ort-Beratung, Persönlicher Accountmanager

### Beratungstermine (`/office/events`)

- Calendly-Integration für Terminbuchung
- Benötigt Cookie-Consent für externe Dienste

### Profil (`/office/profile`)

- **Benutzerdaten**: Name, Unternehmen (bearbeitbar)
- **Anmeldeinformationen**: E-Mail, Passwort (änderbar)
- **Rechnungen**: Link zum Stripe Customer Portal

### Admin Dashboard (`/office/admin/dashboard`)

- Nur für Benutzer mit `isAdmin: true`
- DataGrid-Tabelle aller Benutzer:
  - Vorname, Nachname, Firma, Formulare
- Zugriff auf Formulare anderer Benutzer möglich
- Pagination (Zeilen pro Seite konfigurierbar)

## Subscription-Einschränkungen

Ohne aktives Abonnement:

- Planjahr-Feld ist readonly
- Arbeitszeiten-Bereich ist deaktiviert
- Plangewinn-Eingabe ist readonly
- Maximal 1 Kalkulation möglich (Free Tier)

## Bekannte Issues

- `getPortalUrl` wirft "No url returned" Fehler auf der Billing-Seite wenn kein aktives Abo vorhanden ist
- Calendly-Integration benötigt Cookie-Consent für "necessary" Dienste
