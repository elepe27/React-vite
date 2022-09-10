
import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const colorTheme = createTheme({


    palette: {
        primary:{
            main:'#0151A5',
            dark:'#032656'
        },
        secondary:{
            main:'#007CFF'
        },
        error:{
            main:red.A400
        }
    }

});
