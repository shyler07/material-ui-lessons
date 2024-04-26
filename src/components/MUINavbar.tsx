import { AppBar, Button, IconButton, MenuItem, Stack, Toolbar, Typography ,Menu, ButtonGroup, Box  } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { useState } from "react";

const MUINavbar = () => {

const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
const open = Boolean(anchorEl)
const handleClick = (_event:React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(_event.currentTarget)
}
const handleClose = () => {
  setAnchorEl(null)
}

  return (
    <div>
      <AppBar position="static">
        <Toolbar >
            <IconButton 
                 size="large" 
                edge="start" 
                color="inherit" 
                aria-label='logo'
            />
     
            
                <CatchingPokemonIcon sx={{ mr:1}}/>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1, mr:'2rem'}}>
                    Pokedex
                </Typography>
          
                <Stack direction='row' spacing={2}>
                <ButtonGroup variant='text'   
                    disableRipple 
                    disableElevation 
                    // xs: 'block'
                    sx={{ display: { xs: 'none', sm: 'flex' , md: 'flex' }, 
                    pt:'0.3rem' , gap: '2 px' }} > 
              
           
                <Button color="inherit" 
                    disableRipple 
                    disableElevation 
                    sx={{ '&:hover': {
                    background:'rgba(0, 0, 0, 0.15)'
            },
      }}> Home
              </Button >

            
                    <Button color ="inherit">Features</Button>
                    <Button color ="inherit">About</Button>
                    <Button color ="inherit">Pricing</Button>

                    <Button color ="inherit" id="resorces-button" 
                    onClick={handleClick}
                    aria-controls={open ? 'resources-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    endIcon={<KeyboardArrowDownIcon/>}
                    
                    >
                    Resources
                    </Button>

                    <Button variant="contained" color ="primary" sx={{ ml:2 }}>Login</Button>
                </ButtonGroup>
              </Stack>

                <Menu id='resources-menu' 
                      anchorEl={anchorEl} 
                      open={open} 
                      MenuListProps={{'aria-labelledby': 'resources-button',}}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                      }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
        </Toolbar>
      </AppBar>

   
    </div>
  )
}



export default MUINavbar
