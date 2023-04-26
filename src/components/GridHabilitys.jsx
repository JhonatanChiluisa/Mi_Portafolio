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
    <Box sx={{ justifyContent: 'space-around' }}>
    <Grid container direction={matches ? 'row' : 'column' } spacing={2} className="BgGrid" alignItems='center' p={2}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3}}>
            <CardActionArea>
              <CardContent>
                <DesignServicesIcon sx={{ fontSize: 45 }}/>
                <Typography variant='h4' py={3} color="primary">
                  Diseñador
                </Typography>
                <Typography variant='subtitle1' align='center'>
                  Valoro los principios 
                  de diseño, patrones de diseño limpios y el diseño responsivo.
                </Typography>
                <Typography py={2}>
                  Cosas que disfruto diseñando:
                </Typography >
                <Box sx={{ fontWeight: 'medium'}} py={5}>
              
                    UX, UI, web, aplicaciones
                  
                </Box>
                <Skills value={80}/>
              </CardContent>
            </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3}}>
          <CardActionArea>
            <CardContent>
              <CodeIcon sx={{ fontSize: 45 }}/>
              <Typography variant='h4' py={3} color="primary">
                Desarrollador
              </Typography>
              <Typography variant='subtitle1' align='center'>
                Sólidos conocimientos en el desarrollo front-end web, móvil y aplicaciones de escritorio.
              </Typography>
              <Typography py={2}>
                Tecnologías, frameworks que domino:
              </Typography>
              <Box sx={{ fontWeight: 'medium'}} py={5}>
                React, Laravel, Flutter, React Native, C#, Java, Python, ES6+, HTML5, CSS3+
              </Box>
              <Skills value={90}/>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3}}>
          <CardActionArea>
            <CardContent>
                <StorageIcon sx={{ fontSize: 45 }}/>
              <Typography variant='h4'py={3} color="primary">
                Bases de Datos
              </Typography>
              <Typography variant='subtitle1' align='center'>
                Tengo conocimientos en bases de datos relacionales y no relacionales.
              </Typography>
              <Typography py={2}>
                Gestores que manejo:
              </Typography>
              <Box sx={{ fontWeight: 'medium'}} py={5}>
                PostgreSQL, MySQL, SQLServer, Firestore Database
              </Box>
              <Skills value={60}/>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  </Box>
  
  )
}

export default GridHabilitys