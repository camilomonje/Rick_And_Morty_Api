import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./view/components/Header";
import Character from "./view/pages/Character";
import Home from "./view/pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/" element={<Home />}  />
        <Route  path="/character" element={<Character />}  />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
