import { Box } from "@mui/material";

const drawerWidth = 240;


export const JournalLayout = ({ children, title = '' }: any) => {


    document.title = title;

    return (
        <Box sx={{ display: 'flex' }} >

            {/* {navbar} drawerWidth */}

            {/* {sideBar} drawerWidth */}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* { Toolbar} */}

                {children}

            </Box>

        </Box>
    )
}
