import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Character from "./pages/Character";
import Home from "./pages/Home";

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
