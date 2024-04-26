import { Alert, AlertTitle, Button, Stack } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';

const MUIFeedback = () => {
  return (
    <Stack spacing={2}>
          <Alert severity="error"> This is an error alert</Alert>
          <Alert severity="warning"> This is an warning alert</Alert>
          <Alert severity="success"> This is an success alert</Alert>
          <Alert severity="info"> This is an info alert</Alert>

          <Alert variant='outlined'severity="error"> This is an error alert
                <AlertTitle>Error</AlertTitle>
          </Alert>

          <Alert variant='outlined' severity="warning"> This is an warning alert
          <AlertTitle>Warning</AlertTitle>
          </Alert>

          <Alert variant='outlined' severity="success"> This is an success alert    
            <AlertTitle>Success</AlertTitle>
          </Alert>
          
          <Alert variant='outlined' severity="info"> This is an info alert  
            <AlertTitle>Info</AlertTitle>
          </Alert>


          <Alert variant="filled" severity="error" icon={<CheckIcon fontSize="inherit"/>} onClose={()=>(alert('alert close'))}>
             This is an error alert
         </Alert>
            <Alert variant="filled" severity="warning"> This is an warning alert</Alert>
            <Alert variant="filled" severity="success"> This is an success alert</Alert>
            <Alert variant="filled" severity="info" 
            action={<Button color="inherit" size='small'>Undo</Button>}> 
            This is an info alert
        </Alert>
    </Stack>
  
  )
}

export default MUIFeedback
