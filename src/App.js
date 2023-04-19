import "./App.css";
import GridProyects from "./components/GridProyects";
import NavBar from "./components/NavBar";
import GridPresentation from "./components/GridPresentation";
import GridHabilitys from "./components/GridHabilitys";
import GridQuienSoy from "./components/GridQuienSoy";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BgVideo from "./assets/video/bgvideo.mp4";
import { Typography } from "@mui/material";
import ContadorLikes from "./components/ContadorLikes";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#6E07F3",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <video src={BgVideo} autoPlay loop muted />
        <div className="container">
          <Typography variant="h3">
            Diseñador y Desarrollador de Software
          </Typography>
          <Typography variant="subtitle1" color="secundary" m={3}>
            Analizo, modelo y codifico aplicaciones estilizadas y minimalistas,
            me apasiona lo que hago.
          </Typography>
        </div>
        <GridPresentation />
        <GridQuienSoy />
        <GridHabilitys />
        <GridProyects />
        <ContadorLikes />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
