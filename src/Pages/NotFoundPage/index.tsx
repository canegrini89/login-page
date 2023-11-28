import { useNavigate } from "react-router-dom";
// Components
import Button from "../../components/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl font-bold my-10">404 Page Not Found</h1>
      <Button label="Go to Login" onClick={() => navigate("/login")} />
    </div>
  );
};

export default NotFoundPage;
