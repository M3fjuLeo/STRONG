import React from "react";
import SignupForm from "../authentication/SignupForm";

const Settings = () => {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <SignupForm isEditing={true} />
    </div>
  );
};

export default Settings;
