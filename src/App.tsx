import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';  // Update this import
import CssBaseline from '@mui/material/CssBaseline';  // Update this import
import Layout from './components/Layout/Layout';
import PartIdentificationPage from './components/PartIdentification/PartIdentificationPage';

// Custom theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',      // Main primary color
      light: '#64B5F6',     // Lighter version
      dark: '#2bdb09',      // Darker version
    },
    secondary: {
      main: '#FF4081',      // Main secondary color
      light: '#FF80AB',     // Lighter version
      dark: '#F50057',      // Darker version
    },
    background: {
      default: '#c4c4c4',   // Page background
      paper: '#ffffff',     // Component background
    },
    text: {
      primary: '#333333',   // Main text color
      secondary: '#757575', // Secondary text color
    },
    error: {
      main: '#F44336',      // Error color
    },
    success: {
      main: '#4CAF50',      // Success color
    },
    warning: {
      main: '#FFC107',      // Warning color
    },
    info: {
      main: '#2196F3',      // Info color
    },
  },
  // You can also customize typography, spacing, breakpoints, etc.
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 500,
      letterSpacing: 0.5,
      fontSize: '1.25rem',
    }
  },
  components: {
    // Customize specific components
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000', // Custom AppBar color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // Rounded buttons
          textTransform: 'none', // Prevents automatic uppercase
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <PartIdentificationPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;