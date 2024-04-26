import {    
            Stack,
            Button,
            IconButton,
            ButtonGroup,
            ToggleButton,
            ToggleButtonGroup} from '@mui/material'

import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';


export const MUIButton = () => {
    const [formats, setFormats] = useState<string | null>(null);
    console.log({formats,});

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats);
    };

  return (
    <Stack spacing={10}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://www.google.com/'>Text Button</Button>
            <Button variant='contained'>Text Button</Button>
            <Button variant='outlined'>Text Button</Button>
        </Stack>
  

        <Stack spacing={3} direction='column'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='outlined' color='success'>success</Button>
        </Stack>

        <Stack display='block' spacing={4} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
                <Button variant='contained' 
                startIcon={<SendRoundedIcon/>}  disableElevation>Send
                </Button>

                <Button variant='contained' 
                    endIcon={<SendRoundedIcon/>} disableRipple>Send
                </Button>

                <IconButton aria-label='send'color='warning' size='small'>
                    <SendRoundedIcon/> 
                </IconButton>
        </Stack>
        
        <Stack direction='row'>
            <ButtonGroup arial-label="button-group" 
            variant='outlined' 
            orientation='vertical' 
            size='large'>

            <Button onClick={() => alert("Left Click")}> Left </Button>
            <Button> Center </Button>
            <Button variant='contained'> right </Button>

            </ButtonGroup>
           
        </Stack>

        <Stack direction='row' >
            <ToggleButtonGroup 
                aria-label='text-formatting' 
                value={formats} 
                onChange={handleFormatChange}
                size='small'
                color='success'
                // orientation='vertical'
                // exclusive 
                >

                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBoldIcon/>
                </ToggleButton>

                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalicIcon/>
                </ToggleButton>

                <ToggleButton value='underlined' aria-label='underlined'>
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>

    </Stack>
  )
}
