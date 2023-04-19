import * as React from 'react';
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField, Grid, TextareaAutosize, Box, Stack, Snackbar
  } from "@mui/material";
import SnackBarEmail from './SnackBarEmail';

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  
function DialogEmail() {
    const [open, setOpen] = React.useState(false);
    

  const handleClickOpen = () => {
    setOpen(true);
    
  };
  
  
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen} color="secondary" sx={{ mr: 5}}>
        Di Hola!
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Enviame un mensaje y estare gustoso en responderte"}</DialogTitle>
        <DialogContent>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nombre"
                    type="text"
                    fullWidth
                    variant="standard"
                    required
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastname"
                        label="Apellido"
                        type="text"
                        fullWidth
                        variant="standard"
                        required
                    />
                </Grid>
            </Grid>
            <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Correo Electrónico"
            type="email"
            fullWidth
            variant="standard"
            required
            />
            <Box mt={3}>
                <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                style={{ width: 400 }}
                placeholder="Mensaje"
                />
            </Box>
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <SnackBarEmail/>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogEmail