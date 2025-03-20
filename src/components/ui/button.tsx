import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-yellow-500 text-white rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
