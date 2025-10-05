import { BrowserRouter as Router, Routes, Route } from "react-router";
import DefaultLayOut from "../../layouts/DefaultLayout";
import Home from "../../pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayOut />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
