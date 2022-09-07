import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from "../views";

import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal';
import { RootState } from '../../store/store';

export const JournalPage = () => {


  const dispatch:any = useDispatch();
  const { isSaving, active  } = useSelector( (state:RootState) => state.journal);

  const onclickNewNote= ()=> {

    dispatch(startNewNote());
    
  }
  return (
    <JournalLayout title='Journal-Page'>

      
      
      { 
        (!!active)
        ?
        <NoteView />
        :
        <NothingSelectedView />
      }
     

      <IconButton
        disabled= { isSaving }
        onClick={ onclickNewNote }
        size='large'
        sx={{ 
        
          color:'white',
          backgroundColor:'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position:'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>

      </IconButton>
    </JournalLayout>
  )
}
