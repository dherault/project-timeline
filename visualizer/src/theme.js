import purple from '@material-ui/core/colors/purple'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

// Complementary color to blue
// https://color.adobe.com/create/color-wheel
const gold = {
  50: '#fdf4e4',
  100: '#fbe3bd',
  200: '#f9d091',
  300: '#f6bd64',
  400: '#f4af43',
  500: '#f2a122',
  main: '#f2a122',
  600: '#f0991e',
  700: '#ee8f19',
  800: '#ec8514',
  900: '#e8740c',
  A100: '#ffffff',
  A200: '#ffede0',
  A400: '#ffd0ad',
  A700: '#ffc293',
}

green.contrastText = '#fff'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: gold,
    blue,
    indigo,
    green,
    orange,
    red,
    grey,
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: 32,
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: 28,
    },
    h4: {
      fontFamily: 'Lora, sans-serif',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: 32,
    },
    h5: {
      fontFamily: 'Lora, sans-serif',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: 24,
    },
    subtitle1: {
      fontFamily: 'Lora, sans-serif',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: 29,
    },
  },
})

export default theme
