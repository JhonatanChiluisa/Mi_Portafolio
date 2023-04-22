
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
    <Box sx={{ flexGrow: 1 }} pr={5} pl={5} pb={5}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-around">
        {repos.map((curElem) => (
          <Grid item xs={2} sm={4} md={4} key={curElem.id}>
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