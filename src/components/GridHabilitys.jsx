import React from 'react'
import {
    Typography,
    Grid, Card, CardActionArea, CardContent, Box
  } from "@mui/material";
  import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import Skills from './Skills'
import StorageIcon from '@mui/icons-material/Storage';
import useMediaQuery from '@mui/material/useMediaQuery';
function GridHabilitys() {
  const matches = useMediaQuery('(min-width:1000px)');
  
  return (
  <Grid container direction={matches ? 'row' : 'column' } justifyContent='space-around' alignItems='center' padding={5} className="BgGrid" spacing={2}>
    <Grid item xs={4}>
      <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3, maxWidth: 400}}>
          <CardActionArea>
            <CardContent>
              <DesignServicesIcon sx={{ fontSize: 45 }}/>
              <Typography variant='h4' mb={3} mt={3} color="primary">
                Diseñador
              </Typography>
              <Typography variant='subtitle1' align='center'>
                Valoro los principios 
                de diseño, patrones de diseño limpios y el diseño responsivo.
              </Typography>
              <Typography mt={2} mb={2}>
                Cosas que disfruto diseñando:
              </Typography >
              <Box sx={{ fontWeight: 'medium', m: 3, pl: 5, pr: 5, pb:1}}>
            
                  UX, UI, web, aplicaciones
                
              </Box>
              <Skills value={80}/>
            </CardContent>
          </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3, maxWidth: 400}}>
        <CardActionArea>
          <CardContent>
            <CodeIcon sx={{ fontSize: 45 }}/>
            <Typography variant='h4' mb={3} mt={3} color="primary">
              Desarrollador
            </Typography>
            <Typography variant='subtitle1' align='center'>
              Sólidos conocimientos en el desarrollo front-end web, móvil y aplicaciones de escritorio.
            </Typography>
            <Typography mt={2} mb={2}>
              Tecnologías, frameworks que domino:
            </Typography>
            <Box sx={{ fontWeight: 'medium', m: 1, pl: 5, pr: 5, pb: 2}}>
              React, Laravel, Flutter, React Native, C#, Java, Python, ES6+, HTML5, CSS3+
            </Box>
            <Skills value={90}/>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item xs={4}>
      <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3, maxWidth: 400}}>
        <CardActionArea>
          <CardContent>
              <StorageIcon sx={{ fontSize: 45 }}/>
            <Typography variant='h4' mb={3} mt={3} color="primary">
              Bases de Datos
            </Typography>
            <Typography variant='subtitle1' align='center'>
              Tengo conocimientos en bases de datos relacionales y no relacionales.
            </Typography>
            <Typography mt={2} mb={2}>
              Gestores que manejo:
            </Typography>
            <Box sx={{ fontWeight: 'medium', m: 1, pl: 5, pr: 5, pb: 2}}>
              PostgreSQL, MySQL, SQLServer y Firestore Database
            </Box>
            <Skills value={60}/>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  </Grid>
  )
}

export default GridHabilitys