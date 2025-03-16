import React from "react";
import SignupForm from "../authentication/SignupForm";
import Heading from "../ui/Heading";

const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
      <Heading title="Settings" />
      <div className="rounded-md bg-white p-2"></div>
    </div>
  );
};

export default Settings;
