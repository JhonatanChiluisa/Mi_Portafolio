import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Typography,
    Grid,
  } from "@mui/material";
import Proyects from "./Proyects";
function GridProyects() {
  useEffect(() => {
    AOS.init({duration:2000})
  }, [])
  return (
    <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        mb={5}
        >
                <Grid item xs={4}>
                  <div data-aos = "fade-up">
                    <Typography variant='h4' mt={10} mb={2}>
                        Mis proyectos de inicio
                    </Typography>
                  </div>   
                </Grid>
                <Grid item xs={4}>
                  <div data-aos = "fade-up">
                    <Typography variant='body1' mb={10} pr={8} pl={8}>
                        Soy adicto a los productos digitales. A lo largo de mi carrera,
                        he desarrollado cientos de aplicaciones web, de escritorio, móviles y video juegos en diferentes tecnologías y frameworks. Eventualmente, decidí que sería un desafío
                        divertido intentar diseñar y construir mi portafolio.
                    </Typography>
                  </div> 
                </Grid>
                <Proyects />
    </Grid>
    

  )
}

export default GridProyects