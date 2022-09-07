import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"

import { useForm } from "../../hooks"
import { useMemo, useEffect, useRef } from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from "../components"
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setActiveNote, startDeletingNote, startSavingNote, startUploadingFiles } from "../../store/journal";


export const NoteView = () => {

    const dispatch: AppDispatch = useDispatch();

    const { active: note, messageSave, isSaving } = useSelector((state: RootState) => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();

    }, [date]);

    const fileInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => { dispatch(setActiveNote(formState)); }, [formState]);

    useEffect(() => {
        if (messageSave.length > 0) {
            Swal.fire('Nota actualizada', messageSave, 'success');
        }
    }, [messageSave]);


    const onSetNote = () => {
        dispatch(startSavingNote());
    }

    const onFileInputChange = ({ target }: any) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = ()=> {
        dispatch( startDeletingNote() );
    }



    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>
                <input
                    type='file'
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    accept="image/png, image/gif, image/jpeg"
                    // accept="image/*"
                    style={{ display: 'none' }} />


                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}>
                    <UploadOutlined />
                </IconButton>


                <Button
                    disabled={isSaving}
                    onClick={onSetNote}
                    color='primary' sx={{ p: 2 }}>
                    <SaveOutlined sx={{ mr: 1, fontSize: 30 }} />
                    Guardar
                </Button>

            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label='Titulo'
                    name="title"
                    value={title}
                    onChange={onInputChange}
                    sx={{ border: 'none', mb: 1 }} />

                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color='error'
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            {/* { Image gallery} */}

            <ImageGallery images={note.imageUrls} />

        </Grid>
    )
}
