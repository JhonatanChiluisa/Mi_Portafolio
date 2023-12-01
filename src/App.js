import "./App.css";
import GridProyects from "./components/GridProyects";
import NavBar from "./components/NavBar";
import GridPresentation from "./components/GridPresentation";
import GridHabilitys from "./components/GridHabilitys";
import GridQuienSoy from "./components/GridQuienSoy";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BgVideo from "./assets/video/bgvideo.mp4";
import { Typography} from "@mui/material";
import BoxMensaje from "./components/BoxMensaje";
import ParticlesBackground from "./components/ParticlesBackground";

const theme = createTheme({
  palette: {
    primary: {
      // Purple
      main: "#6E07F3",
    },
    secondary: {
      // White
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ParticlesBackground />
        <NavBar />
        <video src={BgVideo} autoPlay loop muted />
        <div className="container">
          <Typography variant="h3" mx={1}>
            Diseñador y Desarrollador de Software
          </Typography>
          <Typography variant="subtitle1" color="secundary" m={3}>
            Analizo, modelo y codifico aplicaciones estilizadas y
            minimalistas, me apasiona lo que hago.
          </Typography>
        </div>
        <GridPresentation />
        <GridQuienSoy />
        <GridHabilitys />
        <GridProyects />
        <BoxMensaje />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
