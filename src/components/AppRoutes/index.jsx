import { BrowserRouter as Router, Routes, Route } from "react-router";
import DefaultLayOut from "../../layouts/DefaultLayout";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import ScrollDemo from "../../pages/ScrollDemo";
import ModalDemo from "../../pages/ModalDemo";
import GoToTop from "../GoToTop";

function AppRoutes() {
  return (
    <Router>
      <GoToTop />
      <Routes>
        <Route element={<DefaultLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/modal" element={<ModalDemo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scroll" element={<ScrollDemo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
