import { useForm, FormProvider } from "react-hook-form";
import { zodResolver as zod } from "@hookform/resolvers/zod";
import * as z from "zod";
// Hooks
import { useAuth } from "../../../context/AuthContext";
// Components
import Button from "../../Button";
import Input from "../../Input";

// Types
type ValidationSchema = z.infer<typeof schema>;

// Validation Schema
const schema = z.object({
  username: z.string().nonempty({ message: "Username is required" }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

// Default Values
const defaultValues: ValidationSchema = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const { signIn, userError } = useAuth();

  const methods = useForm({ defaultValues, resolver: zod(schema) });

  const handleSubmit = methods.handleSubmit(({ username, password }) => {
    signIn(username, password);
    methods.reset();
  });

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <FormProvider {...methods}>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {userError && (
            <div className="inline-flex justify-center items-center w-full text-danger text-sm py-4 border border-danger rounded-md bg-danger/20">
              {userError}
            </div>
          )}
          <Input label="Username" name="username" required />
          <Input label="Password" name="password" type="password" required />
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm text-blue-50 hover:text-blue-200 italic font-bold"
            >
              Forgot Password?
            </a>
          </div>
          <Button label="Sign In" />
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
