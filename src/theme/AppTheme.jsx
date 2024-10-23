import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { mainTheme } from './mainTheme'
import PropTypes from 'prop-types'


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.element.isRequired
}