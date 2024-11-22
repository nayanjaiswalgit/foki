import { Route, Routes } from "react-router";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";

const RoutesConfig = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />

    {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route> */}
  </Routes>
);
export default RoutesConfig;
