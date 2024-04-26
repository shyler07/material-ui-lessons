import { Avatar, Chip, Stack } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face';
import { useState } from "react";


const MUIChip = () => {
const [chips, setChips] = useState<string[]>(['chip 1', 'chip 2', 'chip 3'])

    const handleAlert = () => {
        alert('Chip Clicked')
    }

    const handleChipDelete = () => {
        alert('Delete Handler Call')
    }

    const handleDelete = (chipDelete: string) => {
        setChips(chips => chips.filter(chip => chip !== chipDelete))
    }

  return (
    <Stack direction='row' spacing={1}>
        <Chip label='Chip' color="primary" size="small" icon={<FaceIcon/>}></Chip>

        <Chip label='Chip Outlined' 
            color="primary" 
            size="small" 
            variant="outlined" 
            avatar={<Avatar><FaceIcon/></Avatar>}>

        </Chip>

        <Chip label='Chip click' 
              color="success" 
              size="small" 
              onClick={handleAlert} 
              icon={<FaceIcon/>}>
        </Chip>

        <Chip label='Chip delete' 
              color="error" 
              size="small" 
              icon={<FaceIcon/>}
              onClick={handleAlert} 
              onDelete={handleChipDelete}
              >
        </Chip>

        {
            chips.map(chip => (
                <Chip key={chip} label={chip} onDelete={()=> handleDelete(chip)}></Chip>
            ))
        }

    </Stack>
  )
}

export default MUIChip
