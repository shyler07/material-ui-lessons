import { Box } from "@mui/material";

//customize theme
import { styled } from '@mui/material';
const StyledBox = styled(Box)(({ theme }) => ({
    height: '250px',
    width: '250px',
    backgroundColor: theme.palette.neutral?.dark
}));
 // background: theme.status.danger
  // backgroundColor: theme.palette.neutral?.main


const MUIResponsive = () => {
  return (
    <>

    <StyledBox>
    <Box sx={{
    height: '300px', 
    width: {

        xs: '100vw', //portview width 0
        sm: '100vw',//portview width 600
        md: '100vw',//portview width 800
        lg: '100vw',//portview width 1000
        xl: '100vw',//portview width 1536
    }, 
    
    bgcolor: 'primary.main'}}>

    </Box>

     <Box sx={{
    height: '300px', 
    width: {

        xs: 100, //portview width 0
        sm: 200,//portview width 600
        md: 300,//portview width 900
        lg: 400,//portview width 1200
        xl: 1000,//portview width 1536
    }, 
    
    bgcolor: 'secondary.light'}}>

    </Box>
    </StyledBox>
    </>
  )
}

export default MUIResponsive
