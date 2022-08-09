import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({

    palette: {
        primary:{
            main:'#005241'
        },
        secondary:{
            main:'#008080'
        },
        error:{
            main:red.A400
        }
    }

});

