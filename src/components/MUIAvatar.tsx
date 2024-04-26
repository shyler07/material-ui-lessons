import { Avatar, Stack , AvatarGroup} from "@mui/material"


const MUIAvatar = () => {
  return (
   <Stack spacing={4}>
        <Stack spacing={1} direction='row'>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'primary.light'}}>CK</Avatar>
        </Stack>

        <Stack spacing={1} direction='row'>
           
            <Avatar src="https://randomuser.me/api/portraits/women/65.jpg" 
            alt="Jane Doe">
            </Avatar>
            <Avatar src="https://randomuser.me/api/portraits/women/69.jpg" 
            alt="Jane Doe">
            </Avatar>
        </Stack>

        <Stack spacing={1} direction='row'>
           <AvatarGroup max={3}>
                <Avatar src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Jane Doe">
                </Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/69.jpg" 
                alt="Jane Doe">
                </Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" 
                alt="Jane Doe">
                </Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/60.jpg" 
                alt="Jane Doe">
                </Avatar>
            </AvatarGroup>

            <Stack spacing={1} direction='row'>
                <Avatar sx={{bgcolor:'primary.light', width:48, height:48}}>BW</Avatar>
                
                <Avatar variant="square" 
                sx={{bgcolor:'primary.light', width:60, height:60}}>CK</Avatar>

                <Avatar variant="rounded" 
                sx={{bgcolor:'primary.light', width:60, height:60}}>CK</Avatar>
            </Stack>

        </Stack>

   </Stack>

   
  )
}

export default MUIAvatar
