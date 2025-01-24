import { useGetUserProfileQuery } from "../app/api/userApi";
import { Navigate } from "react-router";
import { Outlet } from "react-router";
// eslint-disable-next-line react/prop-types
const ProtectedRoutes = () => {
  const { data: user, isLoading } = useGetUserProfileQuery();

  if (isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
