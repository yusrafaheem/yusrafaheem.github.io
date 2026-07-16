import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1a1130',
      paper: '#241a3d',
    },
    primary: { main: '#8ef2b0' },
    secondary: { main: '#c9a7f0' },
    text: {
      primary: '#ede3fb',
      secondary: '#b3a6cc',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 4 },
      },
    },
  },
})

export default theme
