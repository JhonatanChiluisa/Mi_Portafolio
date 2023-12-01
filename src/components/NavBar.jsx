import {
    AppBar,
    Toolbar,
    IconButton
  } from "@mui/material";
import Logo from '../assets/image/Mi proyecto.png';
function NavBar() {
  return (
    <AppBar position="absolute" style={{background: 'transparent', boxShadow: "none"}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml: 2}}
          >
            <img src={Logo} alt='Avatar' width={75}></img>
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar