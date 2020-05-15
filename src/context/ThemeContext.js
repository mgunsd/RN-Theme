import createDataContext from './createDataContext';
import { Appearance } from 'react-native-appearance';
import { getTheme } from '../themes/theme';

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'set_theme':
      return action.payload === true ?
        { ...state, colors: getTheme('light'), toggle: true, mode: 'light' }
        : { ...state, colors: getTheme('dark'), toggle: false, mode: 'dark' }
    default:
      return state;
  }
};

const toggle = (dispatch) => {
  return (value) => {
    dispatch({ type: 'set_theme', payload: value });
  };
};

const osTheme = Appearance.getColorScheme();

export const { Context, Provider } = createDataContext(
  themeReducer,
  { toggle },
  {
    mode: osTheme,
    colors: getTheme(osTheme),
    toggle: false
  }
);





