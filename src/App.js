import './App.css';
import SideHeader from "./components/headers/SideHeader";
import TopHeader from "./components/headers/TopHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Interview from "./components/pages/Interview";
import Error404 from "./components/pages/errors/404";
import { createTheme } from '@material-ui/core/styles';
import {ThemeProvider} from "@mui/material";

// Or Create your Own theme:
const theme = createTheme({
    palette: {
        primary: {
            main: '#000', // very red
        },
        secondary: {
            main: '#f8f9fb', // very cyan
        },
    }
});

function App() {
  return (
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <SideHeader />
              <div className="App">
                  <TopHeader />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/interview" element={<Interview />} />
                      <Route path="*" element={<Error404 />} />
                  </Routes>
              </div>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
