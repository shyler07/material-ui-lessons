import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail'

const MUIList = () => {
  return (
    <Box sx={{width: '400px', bgcolor: '#efefef'}}>
        <List>
          
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List item 1' secondary='Secondary text'/>
                </ListItem>
           
                <Divider/>
    
            <ListItem>
                <ListItemAvatar>
                        <Avatar>
                            <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>
                <ListItemText primary='List item 2' secondary='Secondary text'/>
            </ListItem>
   
            <Divider/>
     
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    <ListItemText primary='List item 2' secondary='Secondary text clickable'/>
                </ListItemButton>
            </ListItem>
    
            <Divider/>
      
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    <ListItemText primary='List item 2' 
                                  secondary='Secondary text clickable with padding'/>
                </ListItemButton>
            </ListItem>
        

        </List>
    </Box>
  )
}

export default MUIList
