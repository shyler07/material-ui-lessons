import { Box, FormControl, FormControlLabel, FormLabel, Radio , RadioGroup, FormHelperText} from "@mui/material"
import { useState } from "react"

const MUIRadioButton = () => {
    const [value, setValue] = useState('')
    const handleChange = (_event:React.ChangeEvent<HTMLInputElement>)=> {
        setValue(_event.target.value)
        
    }

    console.log(value)
  return (
   <Box>
        <FormControl>
             <FormLabel id="job-experience-group">Years of Experience</FormLabel>

             <RadioGroup 
             aria-labelledby="job-experience-group" 
             name="job-experience" 
             value={value}
             onChange={handleChange}
             row
             >

            <FormControlLabel control={<Radio size="small" color="secondary"/>} label ='0-2' value='0-2'/>
            <FormControlLabel control={<Radio size="small" color="error"/>} label ='3-4' value='3-4'/>
            <FormControlLabel control={<Radio/>} label ='5-10' value='5-10'/>
             
             </RadioGroup>

             <FormHelperText>Select only one</FormHelperText>
       
        </FormControl>
   </Box>
  )
}

export default MUIRadioButton
