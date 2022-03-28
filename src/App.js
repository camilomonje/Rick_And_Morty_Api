import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./view/components/Header";
import Character from "./view/pages/Character";
import Episodes from "./view/pages/Episodes";
import Favorites from "./view/pages/Favorites";
import Home from "./view/pages/Home";

function App() {
  return (
    <BrowserRouter  basename="/Rick_And_Morty_Api/">
    <Header />
      <Routes>
        <Route  path="/" element={<Home />}  />
        <Route  path="/favorites" element={<Favorites />}  />
        <Route  path="/character" element={<Character />}  />
        <Route  path="/episodes" element={<Episodes />}  />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
