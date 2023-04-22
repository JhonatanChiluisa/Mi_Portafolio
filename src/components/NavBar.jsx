import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Grow
  } from "@mui/material";
import Logo from '../assets/image/Mi proyecto.png';
import { useState, useEffect } from "react";
function NavBar() {
  const [check, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <AppBar position="absolute" style={{background: 'transparent', boxShadow: "none"}}>
        <Toolbar >
          <Grow in={check} {...(check ? { timeout: 2000 } : {})}> 
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, ml:5}}
            >
              <img src={Logo} alt='Avatar' width={75}></img>
            </IconButton>
          </Grow>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

        </Toolbar>
      </AppBar>
  )
}

export default NavBar