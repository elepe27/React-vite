import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';


export const LoginPage = () => {


    let navigate = useNavigate();
    const onSubmit = (event: any) => {
        event.preventDefault();
        navigate('/turnos');
    }

    return (

        <AuthLayout title='Login'>

            <form
                onSubmit={onSubmit}
                className="animate__animated animate__fadeIn animate__faster">

                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder="Tu@correo.com"
                            name='email'
                            fullWidth
                        >

                        </TextField>
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            name='password'
                            fullWidth
                        >

                        </TextField>
                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} >

                    <Grid item xs={12} sm={6}>
                        <Button
                            type='submit'
                            variant='contained'
                            fullWidth
                            sx={{ color: 'white' }}
                        >
                            Iniciar
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button
                            type='submit'
                            variant='contained'
                            fullWidth
                            sx={{ color: 'white' }}
                        >
                            <Google />
                            <Typography sx={{ ml: 1 }} > Google</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container
                    spacing={0}
                    sx={{ mb: 2, mt: 2 }}
                    direction='column'
                    alignContent='end'
                    justifyContent='end'>
                    <Grid item xs={12} sm={6}>
                        <Link component={RouterLink} color='inherit' to='/info'>
                            Contratar iTurnos
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </AuthLayout>

    )
}
