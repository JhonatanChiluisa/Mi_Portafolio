
import {Grid, Box, Card, CardContent, Typography, Button, CardActionArea, CardActions} from '@mui/material';

import {useEffect, useState} from 'react'
import Link from '../assets/image/external_link.png';

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
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={curElem.id}>
            <Card variant="outlined" sx={{borderRadius: 3}}>
                        <CardActionArea>
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
                            <Button size="small">
                                <a href={curElem.html_url} rel='noopener' style={{textDecoration: "none", color:"#ffffff"}}>
                                  Abrir <img src={Link} alt='External link' className='IconLink'></img>
                                </a>
                            </Button>
                        </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Proyects