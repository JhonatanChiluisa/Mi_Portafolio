
import {
    Typography,
    Grid,
  } from "@mui/material";
import Proyects from "./Proyects";
function GridProyects() {
  return (
    <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        mb={5}
        >
                <Grid item xs={4}>
                    <Typography variant='h4' mt={10} mb={2}>
                        Mis proyectos de inicio
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='body1' mb={10} pr={8} pl={8}>
                        Soy un poco adicto a los productos digitales. A lo largo de los años,
                        he usado cientos de aplicaciones web y móviles en diferentes
                        industrias y verticales. Eventualmente, decidí que sería un desafío
                        divertido intentar diseñar y construir el mío propio.
                    </Typography>
                </Grid>
                <Proyects />
    </Grid>
    

  )
}

export default GridProyects