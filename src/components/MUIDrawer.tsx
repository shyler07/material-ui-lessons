import { Box, Drawer, IconButton, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"


const MUIDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState<true | false>(false)


  return (
    // anchor whre to open the dsrawer
    <>
    <IconButton 
            size="large" 
            edge='start' 
            color="inherit" 
            aria-label="logo" 
            onClick={()=>{setIsDrawerOpen(true)}}
            sx={{
                marginLeft: 2
               }}
            >
        <MenuIcon></MenuIcon>
    </IconButton>
    <Drawer anchor="left" open={isDrawerOpen} onClose={()=>{setIsDrawerOpen(false)}}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant="h6" component="div"> Side Panel </Typography>
        </Box>
    </Drawer>

    </>
  )
}

export default MUIDrawer
