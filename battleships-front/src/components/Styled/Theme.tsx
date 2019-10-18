import { createGlobalStyle, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    padding: string;
    margin: string;

    colors: {
      primary: string;
      secondary: string;
      input: string;
      inputFont: string;
      error: string;
      darkPrimary: string;
      selected: string;
    };
    fonts: {
      family: string;
    };
  }
}

export const theme: DefaultTheme = {
  borderRadius: '0.5rem',
  padding: '0.5rem',
  margin: '0.5rem',

  colors: {
    primary: '#1e88fd',
    secondary: '#c8c8c8',
    input: '#fff',
    inputFont: '#272727',
    error: '#ff321c',
    darkPrimary: '#223eff',
    selected: '#3e7cbf'
  },
  fonts: {
    family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }
};

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.family};
    }
`;
