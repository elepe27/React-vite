import { Button, Grid, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
    return (

        <AuthLayout title='Login'>

            <form
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
                        >
                            Iniciar
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button
                            type='submit'
                            variant='contained'
                            fullWidth
                        >
                            <Google />
                            <Typography sx={{ ml: 1 }} > Google</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </form>

        </AuthLayout>

    )
}
