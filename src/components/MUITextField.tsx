import { Stack, TextField, InputAdornment} from "@mui/material"
import { useState } from "react"


const MUITextField = () => {
  const [value, setvalue] = useState("")

  return (
    <Stack spacing={2}>
        <Stack direction="row">
        <TextField label="Name" variant="outlined"/>
        <TextField label="Lastname" variant="filled"/>
        <TextField label="Age" variant="standard"/>
        </Stack>

        <Stack direction="row">
          <TextField
       
            label="Small secondary"
            size="small"
            color="secondary"
            
          />
           <TextField
       
            label="Medium secondary"
            size="medium"
            color="error"
            required
           
            
          />

           <TextField
       
            label="password"
            size="small"
            color="error"
            required
            type="password"
            
            value={value}
            onChange={e => setvalue(e.target.value)}
            error = {!value}
            helperText = {!value ? 'Reqiured' : "Do not Share your Password"}
         

          />

           <TextField
       
            InputProps = {{readOnly: true}}
            helperText = "Do not Share"
            
            
          />


        </Stack>
        <Stack direction="row" spacing={2} >
          <TextField
            label = "Amount"
            type="number"
            InputProps={{ startAdornment:
            <InputAdornment position="start">$</InputAdornment>
          }}            
          />

          <TextField
            label = "weight"
            type="number"
            InputProps={{  endAdornment:
            <InputAdornment position="end">kg</InputAdornment>
           
          }}  

        
                     
          />

        </Stack>
    </Stack>
  )
}

export default MUITextField
