import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home">
      <h1 className="text-center dark:text-gray-400 text-3xl">STRONG</h1>
    </Link>
  );
};

export default Logo;
