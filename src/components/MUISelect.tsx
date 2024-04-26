import { Box, TextField, MenuItem, Stack } from "@mui/material"
import { useState } from "react"


const MUISelect = () => {
    const [country, setCountry] = useState('')

    const [countries, setCountries] = useState<string[]>([])

    // only 1 item to choose
    const handleChangeCountry =  (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
    console.log({country})

    // multipe item to choose
    // const handleChangeCountries =  (event: React.ChangeEvent<HTMLInputElement>) => {
    //    const value = event.target.value
    //     setCountries(typeof value === 'string' ? value.split (',') : value)
        
    // }
    // console.log({countries})

  return (
    // Box component not necesarry
   <Box width='250px'>
    {/* <Stack direction="row" width="250px"> */}
    <TextField 
        label="select country" 
        select
        fullWidth    
        size="small"
        color="secondary"     
        helperText="please choose country" 
        
        // disable select to select only one
        // SelectProps={{multiple: true}}

        // change the values
        value={country}
        onChange={handleChangeCountry} 
       
    >
        <MenuItem value="india">India</MenuItem>
        <MenuItem value="usa">USA</MenuItem>
        <MenuItem value="canada">Canada</MenuItem>
        
    </TextField>
      

    {/* </Stack> */}

   
 </Box>
   
  )
}

export default MUISelect
