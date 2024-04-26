import { Rating, Stack } from "@mui/material"
import React, { useState } from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const MUIRating = () => {
    // CHANGE THE VALUE 3 INSTEAD OF NULL WHEN USING READONLY / disable readonly
    const [value, setValue] = useState<number | null>(2)
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    
            setValue(newValue)
    }

    console.log(`${value} value`)


  return (
    <Stack spacing={2}>
        <Rating onChange={handleChange} 
                precision={0.5} 
                size = "large"
                icon = {<FavoriteIcon fontSize="inherit" color="error"/>}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
                value={value}
                readOnly

                // use this in using emoji
                // highlightSelectedOnly 
        />

    </Stack>
  )
}

export default MUIRating
