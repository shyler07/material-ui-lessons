import {Typography} from '@mui/material'

export const MUITypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 heading</Typography>
        <Typography variant='h2'>h2 heading</Typography>
        <Typography variant='h3'>h3 heading</Typography>
        <Typography variant='h4' component='h1'>h4 heading</Typography>
        <Typography variant='h5'>h5 heading</Typography>
        <Typography variant='h6' gutterBottom>h6 heading</Typography>

        <Typography variant='subtitle1'>subtitle1 heading</Typography>
        <Typography variant='subtitle2'>sub2 heading</Typography>

        <Typography variant='body1'>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, nemo.
        </Typography>

        <Typography variant='body2'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas corrupti temporibus laboriosam placeat, harum nihil odio quasi repellat eveniet!
        </Typography>
    </div>
  )
}
