import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const MUIToolTip = () => {
  return (

   <Tooltip title='Delete' placement="right" arrow enterDelay={500} leaveDelay={200}>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
   </Tooltip>
  )
}

export default MUIToolTip
