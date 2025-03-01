import axios from "axios";
import { useEffect } from "react";
import { setData, useAppDispatch } from "../services/MuscleSlice";
import Bodymap from "../ui/Bodymap";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/data")
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych: ", error);
      });
  }, [dispatch]);

  return (
    <div className="">
      <Bodymap />
    </div>
  );
};

export default Home;
