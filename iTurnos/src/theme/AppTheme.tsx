import { colorTheme } from './colorTheme';
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material"




export const AppTheme = ({ children }: any) => {
    return (


        <ThemeProvider theme={ colorTheme }>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
        </ThemeProvider>


    )
}

