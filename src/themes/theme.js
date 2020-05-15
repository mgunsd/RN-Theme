export const c = {
  dark17117: '#252a34',
  turq17117: '#08d9d6',
  red17117: '#ff2e63',
  grey17117: '#eaeaea',
}

export const ThemeColors = {
  primaryText: {
    light: c.dark17117,
    dark: c.grey17117,
  },
  primaryBackground: {
    light: c.grey17117,
    dark: c.dark17117,
  },
  secondaryText: {
    light: c.red17117,
    dark: c.turq17117,
  },
};

export const getTheme = (mode) => {
  let Theme = {};
  for (let key in ThemeColors) {
    Theme[key] = ThemeColors[key][mode];
  }
  return Theme;
};
