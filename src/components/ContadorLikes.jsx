import {useState, useEffect} from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import {
    Typography,
    Grid, Card, CardContent, IconButton
  } from "@mui/material";
function ContadorLikes() {
    const [contar, setcontar] = useState(0);
    const [disabled, setdisabled] = useState(false);
    
    const guardarLikes = ()=>{
        localStorage.setItem('likes', contar);
        localStorage.setItem('estado', disabled);
    }
    const obtenerLikes = ()=>{
        return parseInt(localStorage.getItem('likes'));
        
    }

    const obtenerEstado = ()=>{
        return localStorage.getItem('estado')
    }
   
    useEffect(() => {
      setcontar(obtenerLikes())
      setdisabled(obtenerEstado())
    }, [])
    
    
  return (
    <Grid container direction='column' justifyContent='space-around' alignItems='center' className='BgContador' mt={15}>
        
            <Card variant="outlined" sx={{boxShadow:"none", borderRadius: 3, justifyContent:"center", backgroundColor: '#141c3a'}} className='CardContador'>
                <CardContent>
                    <Grid container direction='row' justifyContent='space-around' alignItems='center'>
                        <Grid item xs={4}>
                            <Typography color="secondary" variant="subtitle1">
                                ¿Te gustó mi portafolio?
                                Regalame un like
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                        <IconButton 
                            size="large"
                            edge="start"
                            color="secondary"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={()=>setdisabled(true)}
                            disabled = {disabled} 
                        >
                            <ThumbUpIcon/>
                        </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography color="secondary">
                                {contar}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                
            </Card>
        
    </Grid>
  )
}

export default ContadorLikes