import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";
import { Button } from "../ui";

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
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
};

export default Home;
