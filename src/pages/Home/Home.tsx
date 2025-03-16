import { useEffect } from "react";
import { setMuscleId, useAppDispatch } from "../../services/MuscleSlice";
import Bodymap from "../../ui/Bodymap";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMuscleId(null));
  }, [dispatch]);

  return (
    <div className="">
      <Bodymap />
    </div>
  );
};

export default Home;
