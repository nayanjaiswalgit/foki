import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";

const Home = () => {
  const dispatch = useDispatch(); // Dispatch actions
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    const fakeUser = { name: "Nayan" };
    dispatch(login(fakeUser)); // Dispatch login action
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Home;
