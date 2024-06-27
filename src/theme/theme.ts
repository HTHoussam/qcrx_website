import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#194894' }, // Dark blue color
    secondary: { main: 'rgba(25, 72, 148, 0.5)' }, // Blue color
    text: {
      primary: '#000000', // Dark blue text
    },
    background: {
      default: '#ffffff', // White background
    },
  },
  typography: {
    fontFamily: ['Manrope', 'system-ui', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#000000', // Dark blue
      textAlign: 'center',
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '1.35rem',
      textTransform: 'capitalize',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    body1: {
      fontSize: '12px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          color: '#194894', // Dark blue text
          fontFamily: ['Manrope', 'system-ui', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'].join(','),
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
        },
        body: {
          minHeight: '100vh',
          margin: '0 auto',
          backgroundColor: '#ffffff', // White background
          verticalAlign: 'baseline',
          overflow: 'hidden',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        '*::-webkit-scrollbar': {
          '--thumb-thickness': '0.7rem',
          backgroundColor: 'transparent',
          width: '0.7rem',
          height: '0.7rem',
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#00000044',
          borderRadius: '1rem',
          transition: 'box-shadow 300ms ease',
          boxShadow: '0 0 0 0.275rem white inset',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(1, 16, 67, 0.86)',
        },
        '*:hover::-webkit-scrollbar-thumb': {
          boxShadow: '0 0 0 2px white inset',
        },
      },
    },

    // MuiSelect: {
    //   styleOverrides: {
    //     root: {
    //       color: '#194894',
    //     },
    //   },
    // },

    // MuiAlert: {
    //   styleOverrides: {
    //     root: {
    //       padding: '1px 1rem ',
    //       boxShadow: 'none',
    //     },
    //   },
    // },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       '& .MuiFormLabel-root': {
    //         textTransform: 'capitalize',
    //       },
    //       fontWeight: 300,
    //     },
    //   },
    //   defaultProps: {
    //     size: 'small',
    //     InputLabelProps: {
    //       shrink: true,
    //     },
    //   },
    // },
    // /** overriding position of textfield label to match small size input */
    // MuiInputLabel: {
    //   styleOverrides: {
    //     sizeSmall: {
    //       root: {
    //         transform: 'translate(14px, 8px) scale(1)',
    //       },
    //       shrink: {
    //         transform: 'translate(14px, -10px) scale(0.75)',
    //       },
    //     },
    //   },
    // },
    // MuiModal: {
    //   styleOverrides: {
    //     root: {
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       borderRadius: '15px',
    //     },
    //   },
    // },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: ({ theme }) => ({
    //       color: theme.palette.primary.main,
    //     }),
    //   },
    // },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       width: '100%',
    //     },
    //   },
    // },
    // MuiButton: {
    //   defaultProps: {
    //     variant: 'contained',
    //   },
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'none',
    //       maxHeight: '48px',
    //       padding: '8px 16px',
    //       borderRadius: '5px',
    //     },
    //     containedPrimary: {
    //       '&:hover, &:focus ,&:focus-visible': {
    //         backgroundColor: 'rgba(1, 16, 67, 0.7)',
    //       },
    //     },
    //     containedSecondary: {
    //       backgroundColor: '#6C757D',
    //       '&:hover, &:focus ,&:focus-visible': {
    //         backgroundColor: 'rgba(108, 117, 125, 0.7)',
    //       },
    //     },
    //     outlinedError: {
    //       ':hover': {
    //         backgroundColor: 'rgba(211, 47, 47, 0.2)',
    //       },
    //     },
    //   },
    // },
  },
});
