import { Autocomplete, Stack, TextField } from "@mui/material"
import { useState } from "react"

type Skills = {
    id : number
    label : string
}

const skills = ['HTML', "CSS", "TYPESCRIPT"]
const skillsOption = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,

}))

const MUIAutocomplete = () => {
   
    const [value, setvalue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skills | null>(null)

    const handleChange = (_event: any, newValue: string | null ) => {
         setvalue(newValue)
    }
    console.log({value})

    const handleChangeSkill = (_event: any, newValue: Skills | null ) => {
       setSkill(newValue)
   }
    console.log({skill})

  return (

   <Stack spacing={2} width='250px'>

       
        <Autocomplete 
            options={skills} 
            renderInput={(params) => <TextField {...params} label="skills 1" />}
            onChange={handleChange}

        //use this when typing in autocomplete
            // freeSolo
           
        />

        <Autocomplete 
            options={skillsOption} 
            renderInput={(params) => <TextField {...params} label="skills 2" />}
            value={skill}
            onChange={handleChangeSkill}
            
        />
       
   </Stack>
   
  )
}

export default MUIAutocomplete
