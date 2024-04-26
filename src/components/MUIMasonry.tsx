import { Masonry } from "@mui/lab"
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const heights = [
    100,200,300,400,500
]

const MUIMasonry = () => {


  return (
    <Box sx={{width: 800, minHeight:400}}>
        <Masonry columns={4} spacing={1}>
            {
                heights.map((height, index) => (
                    
                    <Paper  key={index} 
                            sx={{
                            // display:'flex', 
                            // justifyContent:'center', 
                            // alignItems: "center", 
                            // height, 
                            border:"1px solid"}}
                    >
                        {
                            index + 1
                          
                        }
     
                        <Accordion sx={{ minHeight: height}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                 <Typography>
                                    Accordion {index + 1}
                                 </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Content
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                ))

         
            }
        </Masonry>
    </Box>
  )
}

export default MUIMasonry
