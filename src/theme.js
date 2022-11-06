// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  }
}

// 3. extend the theme
const theme = extendTheme({ config,fonts: {
  heading: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
} })

export default theme