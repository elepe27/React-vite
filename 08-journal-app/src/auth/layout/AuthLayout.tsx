import { Grid, Typography } from '@mui/material';


export const AuthLayout = ({ children, title }:any) => {
    return (

        
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ 
                    width: { sd:450 },
                    minHeight: '100vh', 
                    backgroundColor: 'primary.main', 
                    padding: 4 }}
            >
                <Grid item
                    className="box-shadow"
                    xs={3}
                    sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
                >
                    <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

                    { children }

                </Grid>
            </Grid>

        


    )
}
