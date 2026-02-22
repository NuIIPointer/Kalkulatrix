// ==============================|| DEFAULT THEME - CUSTOM SHADOWS  ||============================== //

// Blue-tinted shadow color derived from primary palette
const sc = '18, 42, 98';

const buttonShadow = (color) =>
  [
    `0 0.8px 0.5px -0.3px rgba(${color}, 0.06)`,
    `0 2px 1px -0.6px rgba(${color}, 0.06)`,
    `0 3.6px 2.2px -0.9px rgba(${color}, 0.07)`,
    `0 6px 3.6px -1.2px rgba(${color}, 0.06)`,
    `0 9px 6px 1px rgba(${color}, 0.06)`,
    `0 16px 9px -2px rgba(${color}, 0.06)`,
    `0 24px 16px -2px rgba(${color}, 0.06)`,
    `0 30px 30px -2.5px rgba(${color}, 0.05)`
  ].join(', ');

const cardShadow = (color) =>
  [
    `0 0.8px 0.5px -0.3px rgba(${color}, 0.025)`,
    `0 2px 1px -0.6px rgba(${color}, 0.025)`,
    `0 3.6px 2.2px -0.9px rgba(${color}, 0.03)`,
    `0 6px 3.6px -1.2px rgba(${color}, 0.025)`,
    `0 9px 6px 1px rgba(${color}, 0.025)`,
    `0 16px 9px -2px rgba(${color}, 0.025)`,
    `0 24px 16px -2px rgba(${color}, 0.025)`,
    `0 30px 30px -2.5px rgba(${color}, 0.02)`
  ].join(', ');

const buttonHoverShadow = (color) =>
  [
    `0 1px 1px -0.5px rgba(${color}, 0.05)`,
    `0 2px 2px -1px rgba(${color}, 0.05)`,
    `0 4px 4px -1.5px rgba(${color}, 0.06)`,
    `0 8px 8px -2px rgba(${color}, 0.05)`,
    `0 14px 14px -3px rgba(${color}, 0.04)`
  ].join(', ');

const CustomShadows = () => ({
  card: cardShadow(sc),
  button: buttonShadow(sc),
  buttonHover: buttonHoverShadow(sc),
  buttonWarning: buttonShadow('140, 100, 10'),
  buttonWarningHover: buttonHoverShadow('140, 100, 10'),
  buttonError: buttonShadow('160, 30, 30'),
  buttonErrorHover: buttonHoverShadow('160, 30, 30'),
  buttonSuccess: buttonShadow('8, 100, 40'),
  buttonSuccessHover: buttonHoverShadow('8, 100, 40'),
  buttonSecondary: buttonShadow('80, 80, 80'),
  buttonSecondaryHover: buttonHoverShadow('80, 80, 80'),
  text: `0 -1px 0 rgb(0 0 0 / 12%)`,
  z0: `0 0.25rem 0.5rem -0.125rem rgba(${sc}, 0.03), 0 0.125rem 0.25rem -0.25rem rgba(${sc}, 0.04)`,
  z1: `0 3px 5px -2px rgba(${sc}, 0.08), 0 3px 5px 0 rgba(${sc}, 0.06), 0 1px 5px 0 rgba(${sc}, 0.07)`,
  z2: `0 12px 16px -4px rgba(${sc}, 0.13), 0 4px 6px -2px rgba(${sc}, 0.08)`,
  z3: `0 20px 24px -4px rgba(${sc}, 0.10), 0 8px 8px -4px rgba(${sc}, 0.06)`
});

export default CustomShadows;
