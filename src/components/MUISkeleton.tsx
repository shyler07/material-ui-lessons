import { Avatar, AvatarGroup, Box, Skeleton, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const name = "Tyler Intrepido";
const initials = name
  .split(" ") // Split the name into words
  .map((word) => word.charAt(0)) // Get the first character of each word
  .slice(0, 2) // Get only the first two characters
  .join(""); // Join the characters together

const MUISkeleton = () => {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false) }, 3000)
    }, [])
    


  return (
    // <Stack spacing={2} width='250px'>
    
    //     <Skeleton variant="text"/>
    //     <Skeleton variant="circular" width={40} height={40} animation={false}/>
    //     <Skeleton variant="rectangular" width={250} height={125} animation='wave'/>
        
    // </Stack>

    <Box sx={{ width: '200px'}}>
        {
            loading ? (
                <Skeleton 
                    variant="rectangular"
                    width={256} 
                    height={144} 
                    animation='wave'/>
            ) : (
                <img src="https://source.unsplash.com/random/256x144" 
                    alt="skeleton" 
                    width={256} height={144} />
            )
        }

        <Stack direction='row' spacing={1} sx={{width: '100%', mt:'12px'}}>
            { 
                loading ? (
                    <Skeleton variant="circular" height={40} width={40} animation='wave'/> 
                ):(
                  <AvatarGroup max={2}>
                    <Avatar>{initials}</Avatar>
                 </AvatarGroup>
                )

            }
      

        <Stack sx={{width:'80%'}}>
             {
                loading ? (
                   <>
                   <Typography variant="body1">
                
                        <Skeleton variant="text" width='100%' animation='wave' />
                   </Typography>

                   <Typography variant="body2">
                        <Skeleton variant="text" width='100%' animation='wave' />
                   </Typography>
                   </>
                ) : (
                    <>
                        <Typography variant="body1">HELLO WORLD   {initials}</Typography>
                        <Typography variant="body1">HELLO WORLD</Typography>
                    </>
                )
             }

            </Stack>
        </Stack>
    </Box>

  )
}

export default MUISkeleton
