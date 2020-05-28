import { Colors as c } from './Colors';

export const themes = {
  light: {
    dark: false,
    colors: {
      // primary: c.red_17117,
      // accent: c.turq_17117,
      primary: c.turq_17117,
      accent: c.red_17117,
      //background: c.lightgrey_17117,
      background: 'white',
      card: '#f2f2f2',
      //card: 'white',
      text: c.darkgrey_17117,
      border: c.turq_17117,
      red: c.red_17117,
      blue: c.turq_17117,
    }
  },
  dark: {
    dark: true,
    colors: {
      // primary: c.turq_17117,
      // accent: c.red_17117,
      primary: c.red_17117,
      accent: c.turq_17117,
      background: c.darkgrey_17117,
      card: c.lDark17,
      text: c.lightgrey_17117,
      border: c.turq_17117,
      red: c.red_17117,
      blue: c.turq_17117,
    }
  },
  fantastic: {
    dark: true,
    colors: {
      primary: '#ff2e63',
      accent: c.turq_17117,
      background: '#343B49',
      card: '#252a34',
      text: '#eaeaea',
      border: '#08d9d6',
      red: c.red_17117,
      blue: c.turq_17117,
    }
  },
};

