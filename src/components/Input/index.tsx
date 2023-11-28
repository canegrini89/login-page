import { useFormContext } from "react-hook-form";

interface InputProps {
  label?: string;
  name?: string;
  required?: boolean;
  type?: "text" | "password" | "email";
}

const Input = ({
  label = "",
  name = "",
  required = false,
  type = "text",
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(name, { required })}
          id={name || label}
          name={name}
          type={type}
          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-50 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-50 sm:text-sm sm:leading-6"
        />
      </div>
      {errors && (
        <p className="mt-2 text-sm text-danger" id="error">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Input;
