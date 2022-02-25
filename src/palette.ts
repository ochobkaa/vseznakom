import {createTheme, ThemeOptions} from "@mui/material";

const Palette : ThemeOptions = {
    palette: {
        primary: {
            main: "#7400CC"
        },
        secondary: {
            main: "#CC5514"
        },
        background: {
            default: "#EAEAEA"
        }
    }
}

export default createTheme(Palette)