import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Qna from "./components/qna";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import { NotLoggedInRoutes } from "./routes/NotLoggedInRoutes";
import CreatePostPopup from "./components/createPostPopup";
import Notes from "./components/notes";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
        </Route>

        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/qna" element={<Qna />} exact />
        <Route path="/notes" element={<Notes />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </div>
  );
}

export default App;
