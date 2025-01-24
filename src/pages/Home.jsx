import { Button } from "antd";
import { useLoginMutation } from "../features/users/authApi.Slice";

const Home = () => {
  const [login] = useLoginMutation();

  return (
    <div>
      <Button
        type="primary"
        onClick={() => login({ username: "admin", password: "admin" })}
      >
        Login
      </Button>
    </div>
  );
};

export default Home;
