// material-ui
import { createTheme } from '@mui/material/styles';

// third-party
import { presetPalettes } from '@ant-design/colors';

// project import
import ThemeOption from './theme';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => {
  const colors = presetPalettes;

  const greyPrimary = [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#262626',
    '#141414',
    '#000000'
  ];
  const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
  const greyConstant = ['#fafafb', '#e6ebf1'];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColor = ThemeOption(colors);

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#3f333b',
        white: '#f1f4fc'
      },
      ...paletteColor,
      // primary: createColor('#007f53'),
      // secondary: createColor('#305ab7'),
      error: {
        50: '#ffebee',
        100: '#ffcdd2',
        200: '#ef9a9a',
        300: '#e57373',
        400: '#ef5350',
        500: '#d42a31',
        600: '#d32f2f',
        700: '#c62828',
        800: '#b71c1c',
        900: '#a01717'
      },
      warning: createColor('#ffc300'),
      success: {
        50: '#f0f9f2',
        100: '#d4f3dc',
        200: '#b7edc5',
        300: '#9be7ae',
        400: '#7ee197',
        500: '#0ab13b',
        600: '#0a9f35',
        700: '#098c2f',
        800: '#087928',
        900: '#06661e'
      },
      primary: {
        50: '#040a19',
        100: '#091531',
        200: '#122a62',
        300: '#1b3f94',
        400: '#2454c5',
        500: '#2d69f6',
        600: '#5787f8',
        700: '#81a5fa',
        800: '#abc3fb',
        850: '#c0d0fc',
        900: '#d5e1fd',
        contrastDefaultColor: 'light',
        ...createColor('#2d69f6')
      },
      secondary: {
        50: '#13110c',
        100: '#262217',
        200: '#4d442f',
        300: '#736546',
        400: '#9a875e',
        500: '#c0a975',
        600: '#cdba91',
        700: '#d9cbac',
        800: '#e6ddc8',
        900: '#f2eee3',
        contrastDefaultColor: 'dark',
        ...createColor('#c0a975')
      },
      tertiary: {
        50: '#eaebf2',
        100: '#c9cde0',
        200: '#a7adcb',
        300: '#858db6',
        400: '#6c74a6',
        500: '#555b98',
        600: '#4e538f',
        700: '#454983',
        800: '#3e4076',
        900: '#322f5e',
        ...createColor('#3e4076')
      },
      // primary: {
      //   50: '#e5f6ee',
      //   100: '#c1e7d5',
      //   200: '#99d8ba',
      //   300: '#6dcaa0',
      //   400: '#48be8b',
      //   500: '#13b277',
      //   600: '#0aa36c',
      //   700: '#01915f',
      //   800: '#007f53',
      //   900: '#015f3d',
      //   ...createColor('#007f53')
      // },
      // secondary: {
      //   50: '#e8ebf6',
      //   100: '#c3cde9',
      //   200: '#9cadda',
      //   300: '#758ccc',
      //   400: '#5472c1',
      //   500: '#305ab7',
      //   600: '#2a52ad',
      //   700: '#1f48a1',
      //   800: '#143e95',
      //   900: '#002d7f',
      //   ...createColor('#305ab7')
      // },
      text: {
        primary: paletteColor.grey[700],
        secondary: paletteColor.grey[500],
        disabled: paletteColor.grey[400]
      },
      white: createColor('#FFFFFF'),
      action: {
        disabled: paletteColor.grey[300]
      },
      divider: paletteColor.grey[200],
      background: {
        paper: paletteColor.grey[0],
        default: paletteColor.grey[0]
      }
    }
  });
};

export default Palette;
