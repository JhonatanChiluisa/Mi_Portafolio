import { Grid, Typography, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MaterialUI from '../assets/image/materialUI.png';
function Footer() {
  return (
    <Grid container
    direction="column"
    justifyContent="center"
    alignItems="center" className='Footer'>
        <Grid item >
            <Typography align='center' pl={50} pr={50} pt={10} color="secondary" variant='h5'>
                "Con la práctica se llega a ser experto, aprende cada día algo nuevo."
            </Typography>
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
                    >
                        <TwitterIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
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
                    >
                        <GitHubIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
        <Grid item >
            <Typography align='center' color="secondary" variant='subtitle1'>
                Desarollado por mi @ Jhonatan J. Chiluisa 2023
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