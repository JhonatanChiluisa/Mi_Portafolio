
import {Grid, Box, Card, CardContent, Typography, CardActionArea, CardActions, CardMedia} from '@mui/material';
import {useEffect, useState} from 'react'
import Bg from '../assets/image/backgroundCard.jpg';
function Proyects() {

  const [repos, setRepos] = useState([]);



    const getRepos = async () => {
        const response = await fetch("https://api.github.com/users/JhonatanChiluisa/repos");
        const FinalData = await response.json();
        setRepos(FinalData)
    }
  
    useEffect(() => {
      getRepos();
  }, [])

  return (
    <Box mx={2}>
      <Grid container spacing={2} justifyContent="space-around">
        {repos.map((curElem) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={6} key={curElem.id}>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
              <Card variant="outlined" sx={{borderRadius: 3, boxShadow: 3}} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Bg}
                    alt="Background Card"
                  />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {
                          curElem.name
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        
                        {curElem.description == null ? "Sin descripción" : curElem.description } 
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{backgroundColor: "#6E07F3"}}>
                  <a href={curElem.html_url} rel='noopener' style={{textDecoration: "none", color:"#ffffff"}}>
                    Ver código ...
                  </a>
                </CardActions>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Proyects