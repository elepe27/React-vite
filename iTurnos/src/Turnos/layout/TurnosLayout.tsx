import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../component/';

export const TurnosLayout = ({ children }: any) => {
  const drawerWidth = 200;

  return (
    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >


        <Toolbar />

        {children}

      </Box>

    </Box>
  )
}