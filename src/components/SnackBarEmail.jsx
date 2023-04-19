import React from 'react'
import {
    Stack, Button, Snackbar
  } from "@mui/material";
  import MuiAlert from '@mui/material/Alert';

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
 
    
  
function SnackBarEmail() {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  return (
    <Stack>
    <Button onClick={handleClick}>
      Enviar
    </Button>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Mensaje enviado correctamente!
      </Alert>
    </Snackbar>
  </Stack>
  )
}

export default SnackBarEmail