import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from "react"

const MUIAccordion = () => {

    // when an accordion expand  other accordion close itself
    const [expanded, setExpanded] = useState<string | false >(false)
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel:false)
    }


  return (
  <Box  sx={{m:'2rem', mx: 'auto', width: 860 }}>
            {/* accordion 1 */}
    <Accordion expanded={expanded === "panel1"} onChange={(_event, isExpanded) =>{ 
        handleChange(isExpanded , 'panel1')
    }}>
        <AccordionSummary 
            id="panel1-header" 
            aria-label="panel-content" 
            expandIcon={<ExpandMoreIcon/>}
        >

        <Typography> Accordion 1</Typography>
        </AccordionSummary>

     

        <AccordionDetails>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae eligendi repellendus minus similique? Hic ducimus repudiandae laboriosam alias dolorum.
        </AccordionDetails>
    </Accordion>


    {/* accordion 2 */}
    <Accordion   expanded={expanded === "panel2"} onChange={(_event, isExpanded) =>{ 
        handleChange(isExpanded , 'panel2')
    }} >
        <AccordionSummary 
            id="panel2-header" 
            aria-label="panel-content" 
            expandIcon={<ExpandMoreIcon/>}
        >

        <Typography> Accordion 2</Typography>
        </AccordionSummary>

     

        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo architecto itaque voluptas mollitia, deserunt at perferendis cum nam aut minus velit illum eius, ut quos assumenda optio corrupti sequi!
        </AccordionDetails>
    </Accordion>

    {/* accordion 3 */}
    <Accordion  expanded={expanded === "panel3"} onChange={(_event, isExpanded) =>{ 
        handleChange(isExpanded , 'panel3')
    }}>
        <AccordionSummary 
            id="panel3-header" 
            aria-label="panel3-content" 
            expandIcon={<ExpandMoreIcon/>}
        >

        <Typography> Accordion 3</Typography>
        </AccordionSummary>

     

        <AccordionDetails>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae eligendi repellendus minus similique? Hic ducimus repudiandae laboriosam alias dolorum.
        </AccordionDetails>
    </Accordion>
    </Box>
  )
}

export default MUIAccordion
