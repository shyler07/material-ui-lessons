import { Box, Button, Card, CardActions, CardContent, Typography, CardMedia} from "@mui/material"


const MUICard = () => {
  return (
    <Box width='300px' >
        <Card >

            <CardMedia 
                title="photo" 
                component="img"
                height="140px"
                image= 'https://source.unsplash.com/random'
                alt = "photo"
                />

            <CardContent>
                <Typography gutterBottom variant="h5" component='div'>React</Typography>
                <Typography  variant="body2" color='text.secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, corrupti!</Typography>
            </CardContent>

            <CardActions>
                <Button variant="contained" size="small"> share</Button>
                <Button variant="outlined" size="small"> Learn more...</Button>
            </CardActions>
        </Card>

    </Box>
  )
}

export default MUICard
