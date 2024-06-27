import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';

export const ProviderTree = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
  </ThemeProvider>
);
