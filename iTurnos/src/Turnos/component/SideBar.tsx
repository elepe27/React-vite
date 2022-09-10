import { Box, Divider, Drawer, List, ListItem, Toolbar, Typography } from '@mui/material'

export const SideBar = ({ drawerWidth }: any) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display:{ xs: 'none', sm: 'inline'}}}
            >

            <Drawer
                variant="permanent" // temporary
                open={true}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >

                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        Org Name
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                   <ListItem>Link1</ListItem>
                   <ListItem>Link2</ListItem>
                   <ListItem>Link3</ListItem>
                   <ListItem>Link4</ListItem>
                </List>

            </Drawer>

        </Box>
    )
}
