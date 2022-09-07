import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { RootState } from '../../store/store';


import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassowrd, startLoginWithFacebook } from '../../store/auth/';
import { useMemo } from 'react';

interface SyntheticEvent<T> {

  currentTarget: EventTarget & T;

}

const formData = {
  email: '',
  password: ''
};


export const LoginPage = () => {

  const { status } = useSelector( (state:RootState)=> state.auth);

  const dispatch:any = useDispatch()

  const { email, password, onInputChange, formState,
          isFormValid, emailValid, passwordValid }: any = useForm( formData );

  const { displayName, errorMessage  } = useSelector((state:RootState) => state.auth);

  const isAuthenticating = useMemo( ()=> status === 'checking', [status] );


  const onSubmit = (event: any): any => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassowrd( formState ) );
   
  }

  const onGoogleSignIn = () => {
    
    dispatch( startGoogleSignIn() );
  }

  const onFacebookLogin = ()=> {
    
    dispatch( startLoginWithFacebook());
  }

  return (

    <AuthLayout title='Login'>

      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              name='email'
              onChange={ onInputChange }
              value={ email }
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
            <Grid item xs={12} sm={4} >
              <Button
               type='submit' 
               variant="contained" 
               fullWidth
               disabled ={ isAuthenticating }>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} >
              <Button
                onClick={ onGoogleSignIn }
                variant="contained"
                fullWidth
                disabled = { isAuthenticating }>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} >
              <Button
                onClick={ onFacebookLogin }
                variant="contained"
                fullWidth
                disabled = { isAuthenticating }>
                <Facebook />
                <Typography sx={{ ml: 1 }}>FACEBOOK</Typography>
              </Button>
            </Grid>

          </Grid>

          {
            (errorMessage) &&
            <Alert severity='error'>
                {errorMessage}
          </Alert>
          

          }

          

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
