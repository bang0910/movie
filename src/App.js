import { Routes, Route } from "react-router-dom";
import Home from "./pages/Site/Home";
import Register from "./pages/Site/Register";
import Login from "./pages/Site/Login.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
