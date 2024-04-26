import { BottomNavigation, BottomNavigationAction } from "@mui/material"

import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";

const MUIBottomNavigation = () => {

   const [value, setValue] = useState<number>(0)
   const handleClickIcon = (_event:React.SyntheticEvent<Element, Event>, newValue:number) => {
    setValue(newValue)
   } 

   

  return (
    <BottomNavigation
     sx={{position: 'absolute', width:'100%', bottom: 0}} 
     value={value} onChange={handleClickIcon}
     showLabels
    >


        <BottomNavigationAction label='Home' icon={<HomeIcon/>}/>
        <BottomNavigationAction label='Favorite' icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label='Person' icon={<PersonIcon/>}/>
    </BottomNavigation>
  )
}

export default MUIBottomNavigation
