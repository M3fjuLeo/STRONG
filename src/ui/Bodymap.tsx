import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  setMuscleId,
  useAppDispatch,
  useAppSelector,
} from "../services/MuscleSlice";
import Abdominals from "./bodymap/Abdominals";
import BackBody from "./bodymap/BackBody";
import BackCalves from "./bodymap/BackCalves";
import BackForearms from "./bodymap/BackForearms";
import BackHands from "./bodymap/BackHands";
import BackTraps from "./bodymap/BackTraps";
import Biceps from "./bodymap/Biceps";
import Calves from "./bodymap/Calves";
import Chest from "./bodymap/Chest";
import Forearms from "./bodymap/Forearms";
import FrontBody from "./bodymap/FrontBody";
import FrontShouldres from "./bodymap/FrontShoulders";
import Glutes from "./bodymap/Glutes";
import Hamstrings from "./bodymap/Hamstrings";
import Hands from "./bodymap/Hands";
import Lats from "./bodymap/Lats";
import Lowerback from "./bodymap/Lowerback";
import Obliques from "./bodymap/Obliques";
import Quads from "./bodymap/Quads";
import RearShoulders from "./bodymap/RearShoulders";
import Traps from "./bodymap/Traps";
import TrapsMiddle from "./bodymap/TrapsMiddle";
import Triceps from "./bodymap/Triceps";

const Bodymap = () => {
  const navigate = useNavigate();
  const muscleId = useAppSelector((state) => state.muscle.muscleId);
  const dispatch = useAppDispatch();

  function handleClick(id: string) {
    dispatch(setMuscleId(id));
    navigate("/muscle-description");
  }

  return (
    <div className="flex lg:gap-20 gap-2 lg:flex-row flex-col items-center justify-center mb-10">
      <svg viewBox="0 0 660.46 1206.46" fill="none" className="max-h-[60vh]">
        <Calves
          id="calves"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "calves" && "bodymapActive"}
          onClick={() => handleClick("calves")}
        />
        <Quads
          id="quads"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "quads" && "bodymapActive"}
          onClick={() => handleClick("quads")}
        />
        <Abdominals
          id="abdominals"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <Obliques
          id="obliques"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <Hands id="hands" fill="currentColor" stroke="black" strokeWidth={2} />
        <Forearms
          id="forearms"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <Biceps
          id="biceps"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <FrontShouldres
          id="frontShoulders"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <Chest id="chest" fill="currentColor" stroke="black" strokeWidth={2} />
        <Traps id="traps" fill="currentColor" stroke="black" strokeWidth={2} />
        <FrontBody id="body" />
      </svg>

      <svg viewBox="0 0 660.46 1206.46" fill="none" className="max-h-[60vh]">
        <BackTraps
          id="traps"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <BackCalves
          id="calves"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "calves" && "bodymapActive"}
          onClick={() => handleClick("calves")}
        />
        <Hamstrings
          id="hamstrings"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <Glutes
          id="glutes"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <BackHands
          id="hands"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <BackForearms
          id="forearms"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <Triceps
          id="triceps"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <Lats id="lats" fill="currentColor" stroke="black" strokeWidth={2} />
        <Lowerback
          id="lowerback"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <TrapsMiddle
          id="trapsMiddle"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <RearShoulders
          id="rearShoulders"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <BackBody id="body" />
      </svg>
    </div>
  );
};

export default Bodymap;
