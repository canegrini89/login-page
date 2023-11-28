interface ButtonProps {
  label: string;
  color?: "blue" | "gray";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  label = "Button",
  color = "blue",
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`flex max-w-[400px] w-full justify-center rounded-md px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-md
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
      ${
        color === "blue"
          ? "bg-blue-50 hover:bg-blue-200"
          : "bg-gray-500 hover:bg-gray-600"
      }
      ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
