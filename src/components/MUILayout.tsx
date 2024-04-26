// BOX like a wrapper replacement of div element

import { Box, Divider, Stack, Grid, Paper } from "@mui/material"
//  if you want o use paper disable react fragments
const MUILayout = () => {
  return (
    
<Paper sx={{ padding: '32px'}} elevation={4}>
    <Stack 
        sx={{border: '2px solid'}} 
        direction="row" spacing={2} 
        divider ={<Divider orientation="vertical" flexItem/>} >

    <Box 
        sx={{
            backgroundColor: 'primary.main',
            color : 'white',
            height: '250px',
            width: '250px',
            padding: '16px',
            '&:hover':{
                backgroundColor: 'primary.light'
            },

   }}>
    tyler
   </Box>

   <Box 
        display='flex' 
        height= '250px'
        width= '250px'
        bgcolor='success.light'
        // p for padding
        p={2}
       
        >
        intrepido
   </Box>     
   </Stack>

   <Grid container my={4} spacing={2} 
    alignItems="center"
    justifyContent="center" 
    sx={{ minHeight: '100vh'}}>
        <Grid item xs={12} sm={3} >
            <Box bgcolor="primary.light" p={2} > Item 1</Box>
        </Grid>

        <Grid item  xs={12}  sm={3} >
            <Box bgcolor="primary.dark" p={2}> Item 2</Box>
        </Grid>

        <Grid item  xs={12}  sm={3}>
            <Box bgcolor="primary.light" p={2}> Item 3</Box>
        </Grid>

        <Grid item  xs={12}  sm={3}>
            <Box bgcolor="primary.dark" p={2}> Item 4</Box>
        </Grid>
   </Grid>

   </Paper>
  )
}

export default MUILayout
