import { Box, FormControlLabel, Switch} from "@mui/material"
import { useState } from "react"



const MUISwitch = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    console.log(checked)
  return (
    <Box>
        <FormControlLabel 
        label="Dark mode"
        control={<Switch onChange={handleChange} color='primary'></Switch> }>
        

        </FormControlLabel>
            
    </Box>
  )
}

export default MUISwitch
