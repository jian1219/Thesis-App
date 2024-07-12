import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/Dashboard" element={<Dashboard />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
