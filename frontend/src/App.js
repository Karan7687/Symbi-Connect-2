import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Qna from "./components/qna";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/qna" element={<Qna />} exact />
        
      </Routes>
    </div>
  );
}

export default App;
