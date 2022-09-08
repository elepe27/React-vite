
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const colorTheme = createTheme({


    palette: {
        primary:{
            main:'#B9CEF0'
        },
        secondary:{
            main:'#5088DD'
        },
        error:{
            main:red.A400
        }
    }

});