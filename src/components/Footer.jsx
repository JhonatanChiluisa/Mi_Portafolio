import { Grid, Typography, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import MaterialUI from '../assets/image/materialUI.png';
import MiFoto from '../assets/image/foto_perfil.png';
function Footer() {
  return (
    <Grid container
    direction="column"
    justifyContent="center"
    alignItems="center" className='Footer'>
        <Grid item>
            <img src={MiFoto} alt='Dispositivos' className='Mifoto'></img>
        </Grid>
        <Grid item>
            <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center" mt={5} mb={5}>
                <Grid item>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href='https://www.facebook.com/jonathan.chiluisa.58?mibextid=ZbWKwL'
                    >
                        <FacebookIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href='mailto:jhonatanchiluisagarcia@gmail.com'
                    >
                        <GoogleIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href='https://instagram.com/jhonatanjjj18?igshid=OTJhZDVkZWE='
                    >
                        <InstagramIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href='https://www.linkedin.com/in/jhonatan-chiluisa-garcia-643204203'
                    >
                        <LinkedInIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href='https://github.com/JhonatanChiluisa/'
                    >
                        <GitHubIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        href='tel:+593995304199'
                    >
                        <CallIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
        <Grid item >
            <Typography align='center' color="secondary" variant='subtitle1'>
                Desarrollado por mi @Jhonatan J. Chiluisa 2023
            </Typography>
        </Grid>
        <Grid item>
            <Typography align='center' p={5} color="secondary" variant='subtitle2'>
                Made with Material UI <img src={MaterialUI} alt='Logo' className='IconMaterialUI'></img>
            </Typography>
        </Grid>
    </Grid>
  )
}

export default Footer