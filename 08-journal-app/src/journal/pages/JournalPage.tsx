import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from "../views";


export const JournalPage = () => {
  return (
    <JournalLayout title='Journal-Page'>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem veniam assumenda suscipit? In, ratione atque qui omnis, quod quidem perspiciatis minus quas magni vitae dicta nemo ipsa, consequuntur vel?</Typography> */}
      
      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
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
