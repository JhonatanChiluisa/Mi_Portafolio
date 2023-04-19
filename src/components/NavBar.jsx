import {
    Button,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
  } from "@mui/material";
import Logo from '../assets/image/logo1.png';
import DialogEmail from "./DialogEmail";
function NavBar() {
  return (
    <AppBar position="absolute" style={{background: 'transparent', boxShadow: "none"}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml:5}}
          >
            <img src={Logo} alt='Avatar' width={100}></img>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <DialogEmail/>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar