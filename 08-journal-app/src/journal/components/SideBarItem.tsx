import { useMemo } from 'react';

import { ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

import { setActiveNote } from '../../store/journal';
import { useDispatch } from 'react-redux';

export const SideBarItem = ( { title='', body, id , date, imageUrls= [] }:any ) => {
    

    const newTitle = useMemo( ()=> {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[ title ] );

    const dispatch:any = useDispatch();

    const onActiveNote = ()=> {

        const obj = {id, date, title, body, imageUrls};

        dispatch(setActiveNote(obj));     
    }
    return (
        <ListItem key={id} disablePadding>
            <ListItemButton onClick={ onActiveNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body }/>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

