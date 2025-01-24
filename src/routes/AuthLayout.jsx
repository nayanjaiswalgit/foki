import { Navigate } from "react-router";
import { useGetUserProfileQuery } from "../app/api/userApi";

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children }) => {
  const { data: user, isLoading } = useGetUserProfileQuery();

  if (isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default AuthLayout;
