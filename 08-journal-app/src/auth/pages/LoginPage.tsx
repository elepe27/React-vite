import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { RootState } from '../../store/store';


import { useDispatch, useSelector } from 'react-redux';
import { chekingAuthentication, startGoogleSignIn } from '../../store/auth/';
import { useMemo } from 'react';

interface SyntheticEvent<T> {

  currentTarget: EventTarget & T;

}



export const LoginPage = () => {

 
  const { status } = useSelector( (state:RootState)=> state.auth)



  const dispatch:any = useDispatch()

  const { email, password, onInputChange, formState }: any = useForm({
    email: 'esteban.lepe1c@gmail.com',
    password: '13_enero'
  });

  const isAuthenticating = useMemo( ()=> status === 'checking', [status] );


  const onSubmit = (event: any): any => {
    event.preventDefault();

    dispatch( chekingAuthentication() );
   
  }

  const onGoogleSignIn = () => {
    
    dispatch( startGoogleSignIn() );
  }

  return (

    <AuthLayout title='Login'>

      <form onSubmit={onSubmit} >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              name='email'
              onChange={onInputChange}
              value={email}
              fullWidth />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingresar contraseña"
              name='password'
              onChange={onInputChange}
              value={password}
              fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6} >
              <Button
               type='submit' 
               variant="contained" 
               fullWidth
               disabled ={ isAuthenticating }>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button
                onClick={ onGoogleSignIn }
                variant="contained"
                fullWidth
                disabled = { isAuthenticating }>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>

          </Grid>

        </Grid>
      </form>

    </AuthLayout>

  )
}
