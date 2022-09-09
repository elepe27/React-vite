import { Login, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { Link as RouterLink, NavLink } from "react-router-dom"



export const Navbar = ({ drawerWidth }: any) => {
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

                <Grid container direction='row' justifyContent='start' alignItems='start' sx={{ width: '400px' }}>
                    <img src="/Turnos.png" width='100px' style={{ marginBottom: '20px' }} />
                </Grid>
                <Grid container direction='row' spacing={0} >

                    <Grid item xs={12} sx={{ display:{ xs: 'none', sm: 'inline'}}} justifyContent='end' alignItems='end' >
                        <Link
                            className="sinline"
                            component={NavLink}
                            color='inherit'
                            to='/'
                            >
                            Inicio
                        </Link>

                        <Link
                            className="sinline"
                            component={NavLink}
                            color='inherit'
                            to='/us'
                            sx={{ ml:2 }}>
                            Nosotros
                        </Link>

                        <Link
                            className="sinline"
                            component={NavLink}
                            color='inherit'
                            to='/pricing'
                            sx={{ ml:2 }}>
                            Precios
                        </Link>

                    </Grid>

                    





                </Grid>


                <Grid container direction='row' justifyContent='end' alignItems='end'>
                    <IconButton
                        color='secondary'
                    >
                        <Link component={RouterLink} color='inherit' to='/auth'>
                            <Login />
                        </Link>

                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
