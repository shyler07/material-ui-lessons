import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useState } from "react"


const MUIDialog = () => {
const [open, setOpen] = useState<boolean>(false)

const handleOpenBtn = () => {
    setOpen(true)
}

const handleCloseBtn = () => {
    setOpen(false)
}

  return (
   <>
    <Button onClick={handleOpenBtn } >Open Dialog</Button>
    <Dialog 
        aria-label="dialog-title" 
        aria-labelledby="dialog-description"
        open={open}
        onClose={handleCloseBtn}
    >
        <DialogTitle id='dialog-title'>Submit Test</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-context'> 
            Are you sure you want to submit  the test? you will not be 
            edit after submitting.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseBtn}>Cancel</Button>
            <Button onClick={handleCloseBtn} autoFocus>Submit</Button>
        </DialogActions>
    </Dialog>

   </>
  )
}

export default MUIDialog
