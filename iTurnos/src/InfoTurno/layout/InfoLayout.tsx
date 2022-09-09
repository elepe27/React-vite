import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components";

const drawerWidth = 0;

export const InfoLayout = ({ children, title }: any) => {
    document.title = `iTurnos - ${title}`;
    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

            <Navbar drawerWidth={ drawerWidth } />
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
