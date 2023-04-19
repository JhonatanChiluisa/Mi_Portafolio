import { Grid } from '@mui/material'
import Device from '../assets/image/device1.png';


function GridPresentation() {
  return (
    <Grid
    container
    direction="column"
    justifyContent="space-around"
    alignItems="center"
    >
        <img src={Device} alt='Dispositivos' className='Imagen2'></img>
    </Grid>
  )
}

export default GridPresentation