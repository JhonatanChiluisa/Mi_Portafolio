import { Grid, Typography } from "@mui/material"

function GridQuienSoy() {
  return (
    <Grid container direction="column" justify='space-around' alignItems='center' className="Footer">
      <Grid item xs={4}>
        <Typography variant='h4' mt={18} mb={2} pr={5} pl={5} color="secondary">
            Hola soy Jhonatan, encantado de conocerte
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant='body1' mt={2} mb={10} pr={8} pl={8} color="secondary">
          Desde el principio, me di cuenta de que la programación no era solo una habilidad técnica, sino también una forma de pensar y resolver problemas. Estudiar ingeniería en software me permitió desarrollar habilidades técnicas y de pensamiento crítico, trabajar en equipo, y participar en proyectos innovadores. Soy una persona muy perseverante, curiosa por naturaleza y siempre estoy trabajando para mejorar mis conocimientos.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default GridQuienSoy