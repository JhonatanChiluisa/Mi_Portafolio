import React from 'react'
import {
    Typography,
    Grid, Card, CardActionArea, CardContent
  } from "@mui/material";
  import DesignServicesIcon from "@mui/icons-material/DesignServices";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CodeIcon from "@mui/icons-material/Code";
import Skills from './Skills'
import StorageIcon from '@mui/icons-material/Storage';
import useMediaQuery from '@mui/material/useMediaQuery';
function GridHabilitys() {
  const matches = useMediaQuery('(min-width:600px)');
  
  return (
  <Grid container direction={matches ? 'row' : 'column' } justifyContent='space-around' alignItems='center' padding={5} className="BgGrid" spacing={2}>
    <Grid item xs={4}>
      <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3}}>
          <CardActionArea>
            <CardContent>
              <DesignServicesIcon sx={{ fontSize: 40 }}/>
              <Typography variant='h4' mb={3} mt={3} color="primary">
                Diseñador
              </Typography>
              <Typography variant='subtitle1' align='center'>
                Valoro la estructura de contenido simple, los patrones de diseño
                limpios y las interacciones bien pensadas.
              </Typography>
              <Typography>
                Cosas que disfruto diseñando:
              </Typography>
              <Typography pb={5}>
                UX, UI, web, aplicaciones, logotipos
              </Typography>
              <Skills value={80}/>
            </CardContent>
          </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3}}>
        <CardActionArea>
          <CardContent>
            <CodeIcon sx={{ fontSize: 44 }}/>
            <Typography variant='h4' mb={3} mt={3} color="primary">
              Desarrollador
            </Typography>
            <Typography variant='subtitle1' align='center'>
              Valoro la estructura de contenido simple, los patrones de diseño
              limpios y las interacciones bien pensadas.
            </Typography>
            <Typography>
              Cosas que disfruto diseñando:
            </Typography>
            <Typography pb={5}>
              UX, UI, web, aplicaciones, logotipos
            </Typography>
            <Skills value={90}/>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3}}>
        <CardActionArea>
          <CardContent>
              <StorageIcon sx={{ fontSize: 40 }}/>
            <Typography variant='h4' mb={3} mt={3} color="primary">
              Bases de Datos
            </Typography>
            <Typography variant='subtitle1' align='center'>
              Valoro la estructura de contenido simple, los patrones de diseño
              limpios y las interacciones bien pensadas.
            </Typography>
            <Typography>
              Cosas que disfruto diseñando:
            </Typography>
            <Typography pb={5}>
              UX, UI, web, aplicaciones, logotipos
            </Typography>
            <Skills value={60}/>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  </Grid>
  )
}

export default GridHabilitys