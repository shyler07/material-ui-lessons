import { Box, Breadcrumbs, Link } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MUIBreadcrumbs = () => {
    
  return (
    <Box m={2}>
                                                {/* you can use separator = '-' */}
        <Breadcrumbs arial-label="breadcrumb" 
         separator={<NavigateNextIcon/>}
         maxItems={3}
        //  itemsAfterCollapse={2}
         itemsBeforeCollapse={2}
        >
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Pokemon</Link>
            <Link underline="hover" href="#">Type</Link>
            <Link underline="hover" href="#">Trainer</Link>
        </Breadcrumbs>

    </Box>
  )



}

export default MUIBreadcrumbs
