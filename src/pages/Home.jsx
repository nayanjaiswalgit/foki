import { useFetchUsersQuery } from "../features/users/usersApiSlice";

const Home = () => {
  const { data: users, error, isLoading } = useFetchUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
