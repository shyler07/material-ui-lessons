import { Box, FormControlLabel, FormControl, FormLabel, FormGroup, FormHelperText, Checkbox } from "@mui/material"
import { useState } from "react"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const MUICheckbox = () => {
    const [accept, setAccept] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setAccept(event.target.checked)
    }

    console.log(accept)

    const [skills, setSkills] = useState<string[]>([])

    const handleskillChange  = (event: React.ChangeEvent<HTMLInputElement>) => { 
       const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter ((skill) => skill !== event.target.value))
        }
    }

    console.log(skills)
  return (
    <Box>
        <FormControlLabel 
            label="True or False"
            control={<Checkbox checked={accept} onChange={handleChange}/>}
            >
        
        </FormControlLabel>


        <Box>
         
            <FormLabel> Check this</FormLabel>
            <Checkbox 
                
                icon={<BookmarkBorderIcon/>} 
                checkedIcon={<BookmarkIcon/>}
                checked = {accept}
                onChange={handleChange}

                
                />
        </Box>

        <FormControl >
          <FormLabel > Skills </FormLabel>
          <FormGroup row>
            
            <FormControlLabel
                label= "HTML"
                value="HTML"
                control={<Checkbox size="small" color="secondary" 
                checked={skills.includes('HTML')} 
                onChange={handleskillChange}/>}
            />

            <FormControlLabel
                label= "JAVASCRIPT"
                value="JAVASCRIPT"
                control={<Checkbox checked={skills.includes('JAVASCRIPT')} 
                onChange={handleskillChange}/>}
            />

            <FormControlLabel
                label= "CSS"
                value= "CSS"
                control={<Checkbox checked={skills.includes('CSS')} 
                onChange={handleskillChange}/>}
            />
            
          </FormGroup>
          <FormHelperText></FormHelperText>
        </FormControl>


    </Box>

    
    
   
  )
}

export default MUICheckbox
