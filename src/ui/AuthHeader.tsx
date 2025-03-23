import React from "react";

interface AuthHeaderProps {
  title: string;
  description: string;
}

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="dark:text-gray-300">
      <h1 className="text-4xl mb-2">{title}</h1>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default AuthHeader;
