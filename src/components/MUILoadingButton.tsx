//install =>  npm add @mui/lab
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'


const MUILoadingButton = () => {
  return (
   <Stack spacing={2} direction='row'>

    <LoadingButton variant='outlined'>Submit</LoadingButton>
    <LoadingButton loading variant='outlined'>Submit</LoadingButton>

    <LoadingButton  loadingIndicator='Loading...' 
                    variant='outlined'
    >
                    Fetch Data
    </LoadingButton>

    <LoadingButton loading 
                   loadingIndicator='Loading...' 
                   variant='outlined'
    >
                   Fetch Data
    </LoadingButton>

    <LoadingButton  
                   variant='outlined'
                   startIcon={<SaveIcon/>} 
                   >
                   Save
    </LoadingButton>

    <LoadingButton 
                   loading
                   variant='outlined'
                   loadingPosition='start'
                   startIcon={<SaveIcon/>} 
                   >
                   Save
    </LoadingButton>

    <LoadingButton 
                   loading ={true} //you can edit true or false
                   variant='outlined'
                   loadingPosition='end'
                   endIcon={<SaveIcon/>} 
                   >
                   Save
    </LoadingButton>

   </Stack>
  )
}

export default MUILoadingButton
