// Hooks
import { useAuth } from "../../context/AuthContext";

const DashboarPage = () => {
  const { username } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-2xl font-bold">Hello {username},</h1>
      <h2 className="text-4xl font-bold">Welcome to your dashboard</h2>
      <p className="italic text-gray-500 mt-4">
        You can reload the page and the user will still be saved in the
        localstorage.
      </p>
    </div>
  );
};

export default DashboarPage;
