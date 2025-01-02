import React from "react";
import { useUser } from "../../authentication/useUser";
import Heading from "../../ui/Heading";

const Home = () => {
  const { user } = useUser();
  const fullName = user?.user_metadata.fullName.split(" ")[0];

  return (
    <div>
      <Heading title={`Hello ${fullName ? fullName : "User"}`} />
    </div>
  );
};

export default Home;
