import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#789DBC'
    },
    secondary: {
      main: '#FFE3E3'
    },
    error:{
      main: red.A400
    }
  }
})