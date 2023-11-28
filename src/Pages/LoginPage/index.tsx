// Components
import LoginForm from "../../components/Forms/LoginForm";
// Assets
import loginImage from "../../assets/login-image.jpg";

const LoginPage = () => {
  return (
    <div className="flex h-full">
      <img
        src={loginImage}
        alt="comppany image"
        className="object-cover w-full h-full filter brightness-90"
      />
      <div className="absolute min-w-[400px] flex flex-col justify-center bg-white/90 rounded px-8 py-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your
            <br />
            <span className="text-blue-50 text-4xl">Dashboard</span>
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
