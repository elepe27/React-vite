import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"


export const Navbar = ( {drawerWidth}:any ) => {
  return (
    <AppBar
            position="fixed"
            sx={{
                width: {
                    sm: `calc(100% - ${drawerWidth}px)`,
                    ml: { sm: `${drawerWidth}px` }
                }
            }}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <img src="/Turnos.png" width='10%' style={{ marginBottom: '20px' }} />
                </Grid>
            </Toolbar>
        </AppBar>
  )
}
