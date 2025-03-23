import React from "react";

interface HeadingProps {
  title: string;
  description?: string;
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="flex flex-col gap-2 dark:text-gray-300">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
