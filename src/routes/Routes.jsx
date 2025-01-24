import { Route, Routes } from "react-router";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Chat from "../pages/Chat.jsx";
import LoginSignup from "../pages/auth/LoginSignup";
import AuthRoutes from "./AuthRoutes.jsx";
import ProtectedRoutes from "./ProtectedRoutes";
import HomeLayout from "../common/layout/HomeLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Expenses from "../pages/Expenses.jsx";
import Mail from "../pages/Mail.jsx";
import Settings from "../pages/Settings";
import StatementManager from "../pages/Statement.jsx";
import TransactionManager from "../pages/Transactions.jsx";

const RoutesConfig = () => (
  <Routes>
    <Route
      path="login"
      element={
        <AuthRoutes>
          <LoginSignup />
        </AuthRoutes>
      }
    />

    <Route element={<ProtectedRoutes />}>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="chat" element={<Chat />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="mail" element={<Mail />} />
        <Route path="settings" element={<Settings />} />
        <Route path="statement" element={<StatementManager />} />
        <Route path="statement/transactions" element={<TransactionManager />} />
      </Route>
    </Route>

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
