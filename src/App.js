import './App.css';
import SideHeader from "./components/headers/SideHeader";
import TopHeader from "./components/headers/TopHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Interview from "./components/pages/Interview";
import Error404 from "./components/pages/errors/404";

function App() {
  return (
      <BrowserRouter>
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
      </BrowserRouter>
  );
}

export default App;
