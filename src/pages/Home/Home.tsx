import React, { useState } from "react";
import { useUser } from "../../authentication/useUser";
import Heading from "../../ui/Heading";

const Home = () => {
  const { user } = useUser();
  const fullName = user?.user_metadata.fullName?.split(" ")[0];
  const [openForm, setOpenForm] = useState<boolean>();

  return (
    <div className="">
      <div className="flex gap-4 items-center mb-10">
        <Heading title={`Hello ${fullName || "User"}`} />
      </div>
    </div>
  );
};

export default Home;
