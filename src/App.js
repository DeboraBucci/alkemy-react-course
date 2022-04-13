import { Route, Routes } from "react-router-dom";
import Listado from "./components/Listado";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/listado" element={<Listado />} />
    </Routes>
  );
}

export default App;
