import React from "react";

interface AuthHeaderProps {
  title: string;
  description: string;
}

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div>
      <h1 className="text-4xl mb-2">{title}</h1>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default AuthHeader;
