import { Link, Stack, Typography } from "@mui/material"


const MUILinks = () => {
  return (
   <Stack spacing={2} direction="row" m={4}>
        <Link href='#'> 1st Link</Link>

        <Typography variant="body1" color="secondary">
            <Link href='#' color="secondary" underline="hover"> 2nd Link</Link>
            <Link href='#' color="secondary" underline="none"> 3rd Link</Link>
        </Typography>
   </Stack>
  )
}

export default MUILinks
