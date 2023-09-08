import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { borderRadius, margin } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { startSavePost } from '../../../store/findy/findyThunks';
import { useForm } from '../../../hooks/useForm';
import { useEffect } from 'react';
import { setActivePost } from '../../../store/findy/findySlice';
// import { ImageGallery } from '../components'


export const NewPost = () => {

    const {activePost: post} = useSelector(state => state.findy);

    const {description, imageURL, onInputChange, formState} = useForm(post);

    const dispatch  = useDispatch();
    
    useEffect(() => {
      
        dispatch( setActivePost(formState));
    
    }, [formState])
    

     const onSavePost = () => {
         dispatch ( startSavePost());
        }
  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ 
            mb: 1,
            backgroundColor: 'white',
            width: '500px',
            borderRadius: '20px',
            marginTop: '20px',
            marginLeft: '8px'

         }}
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Grid item>
            <Typography fontSize={ 25 } fontWeight='light' mt={5} ml={5} >New Post</Typography>
        </Grid>
        <Grid item>
            <Button 
            onClick={onSavePost}
            color="primary"  
            sx={{ padding: 2, marginTop: '40px'}} >
                <SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid 
        container
        sx={{justifyContent:'center'}}

        >
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="URL de la foto"
                name='imageURL'
                value={imageURL}
                onChange={onInputChange}
                sx={{ 
                    border: 'none',
                    mb: 1,
                    width: '300px' 
                }}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Añade una descripción"
                minRows={ 2 }
                name='description'
                value={description}
                onChange={onInputChange}
                sx={{
                    marginBottom: '20px',
                    width: '300px',
                }}
            />
        </Grid>

        {/* Image gallery */}
        {/* <ImageGallery /> */}

    </Grid>
  )
}