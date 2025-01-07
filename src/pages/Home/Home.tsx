import React, { useState } from "react";
import { useUser } from "../../authentication/useUser";
import CreateWorkoutTemplateForm from "../../components/CreateWorkoutTemplateForm";
import Heading from "../../ui/Heading";

const Home = () => {
  const { user } = useUser();
  const fullName = user?.user_metadata.fullName?.split(" ")[0];
  const [openForm, setOpenForm] = useState<boolean>();

  return (
    <div className="">
      <div className="flex gap-4 items-center mb-10">
        <Heading title={`Hello ${fullName || "User"}`} />

        <button
          onClick={() => setOpenForm(true)}
          className="border p-2 cursor-pointer text-white bg-blue-500 rounded-md"
        >
          Create workout template
        </button>
      </div>

      {openForm && <CreateWorkoutTemplateForm setOpenForm={setOpenForm} />}
    </div>
  );
};

export default Home;
