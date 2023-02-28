const COLORS = {
  backgrounds: {
    primary: '#FFFFFF',
    secondary: '#000',
    light_gray: '#EFF0F7',
    green: '#F2FFFC',
    red: '#FFF3F8',
    lighter_gray: '#eff0f133',
    purple: '#5F2EEA',
    white: '#fff',
    black: '#000',
    gray: 'rgba(53,53,53)',
  },
  fonts: {
    primary: '#000',
    secondary: '#fff',
    white: '#fff',
    black: '#000',
    light_gray: '#6E7191',
    lighter_gray: '#6E7191',
    gray: '#4E4B66',
    green: '#00966D',
    red: '#ED2E7E',
    purple: '#5F2EEA',
  },
  borders: {
    white: '#fff',
    black: '#000',
    light_gray: '#EFF0F7',
    lighter_gray: '#eff0f133',
    primary: '#E4DAFF',
    green: '#00966D',
    red: '#ED2E7E',
  },
  shadows: {
    primary: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.11,
      shadowRadius: 15,
      elevation: 2,
    },
    secondary: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.04,
      shadowRadius: 6,
      elevation: 2,
    },
  },
};

export const themeColor = {
  light: COLORS,
  dark: {
    ...COLORS,
    backgrounds: {
      ...COLORS.backgrounds,
      primary: '#0c0d11',
      secondary: '#fff',
    },
    fonts: {
      ...COLORS.fonts,
      primary: '#fff',
      secondary: '#0c0d11',
    },
    shadows: {
      primary: {
        shadowColor: '#ffffff',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 50,
        elevation: 2,
      },
      secondary: {
        shadowColor: '#ffffff',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
      },
    },
  },
};
