import { Alert, AlertProps, Button, Snackbar } from "@mui/material"
import { useState, forwardRef } from "react"


//custom snackbar method 1

// const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
//   function SnackbarAlert (props, ref){
//     return <Alert elevation={6} ref={ref} {...props} >
//       {props.children}
//     </Alert>
//   }
// )

//custom snackbar method 2
const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, ...otherProps }, ref) => (
    <Alert elevation={6} ref={ref} {...otherProps}>
      {children}
    </Alert>
  )
);


const MUISnackbar = () => {

    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
       setOpen(true)

    }

    const handleClose = (_event : React.SyntheticEvent | Event, reason?: string) =>{
      if (reason === 'clickaway'){
          return
      }
      setOpen(false)
    }
  return (
    <>
         <Button onClick={handleOpen}
            >  Submit  
         </Button> 
         {/* default snackbar */}
             <Snackbar message='Form submitted successfully' 
             autoHideDuration={2000}
             open={open}
             onClose={handleClose}
             anchorOrigin={{
              vertical: 'bottom',
              horizontal: "center"
             }}
             >
             </Snackbar>
     

         {/* customize snackbar */}
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity="success" >Form Submitted successfully
                </SnackbarAlert>
         </Snackbar>
    </>

  )
}

export default MUISnackbar
