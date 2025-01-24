import { useGetUserProfileQuery } from "../app/api/userApi";
import { Navigate } from "react-router";

// eslint-disable-next-line react/prop-types
const AuthRoutes = ({ children }) => {
  const { data: user, isLoading } = useGetUserProfileQuery();

  if (isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (user) {
    return <Navigate to="/home" />;
  }
  return <>{children}</>;
};

export default AuthRoutes;
