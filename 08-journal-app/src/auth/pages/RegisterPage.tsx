import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/';
import { AppDispatch, RootState } from '../../store/store';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value: string) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value: string) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [(value: string) => value.length >= 1, 'El nombre es obligatorio.'],
}


export const RegisterPage = () => {

  const dispatch: AppDispatch = useDispatch();
  const [ formSubmitted, setFormSubmitted ] = useState(false);

  const { status, errorMessage } = useSelector((state: RootState) => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'cheking', [status]);


  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  }: any = useForm(formData, formValidations);


  const onSubmit = (event: any) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;


    dispatch(startCreatingUserWithEmailAndPassword(formState))

  }


  return (

    <AuthLayout title='Registro'>


      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Completo"
              value={displayName}
              name='displayName'
              onChange={onInputChange}
              fullWidth
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid} />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="tucorreo@google.com"
              value={email}
              name='email'
              onChange={onInputChange}
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText={emailValid} />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingresar contraseña"
              value={password}
              name='password'
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              xs={12}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type='submit'
                variant="contained"
                fullWidth>
                CREAR CUENTA
              </Button>
            </Grid>


          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/'>
              Ingresar
            </Link>

          </Grid>

        </Grid>
      </form>

    </AuthLayout>

  )
}
