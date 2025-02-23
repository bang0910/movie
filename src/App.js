import { Routes, Route } from "react-router-dom";
import Home from "./pages/Site/Home";
import Login from "./pages/Site/Login";
import Register from "./pages/Site/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default App;
