import {
    Typography,
    Grid, Box
}
from "@mui/material";
function BoxMensaje() {
  return (
    <Grid container alignItems='center' className='BgContador' mt={15}>
        <Grid item xs={12}>
            <Box bgcolor="#141c3a" borderRadius='10px' mx={5}>
                <div data-aos="zoom-in">
                    <Typography variant="h5" color="secondary" py={5} px={1}>
                        "Con la práctica se llega a ser experto, aprende cada día algo nuevo."
                    </Typography>
                </div>
            </Box>
        </Grid>  
    </Grid>
  )
}

export default BoxMensaje