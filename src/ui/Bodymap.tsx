import { useEffect, useState } from "react";
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

  const [strokeColor, setStrokeColor] = useState("");

  useEffect(() => {
    const handleDarkModeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setStrokeColor(isDark ? "#fff" : "#484a68");
    };

    handleDarkModeChange();
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

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
          active={muscleId === "abdominals" && "bodymapActive"}
          onClick={() => handleClick("abdominals")}
        />
        <Obliques
          id="obliques"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "obliques" && "bodymapActive"}
          onClick={() => handleClick("obliques")}
        />
        <Hands
          id="hands"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "hands" && "bodymapActive"}
          onClick={() => handleClick("hands")}
        />
        <Forearms
          id="forearms"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "forearms" && "bodymapActive"}
          onClick={() => handleClick("forearms")}
        />
        <Biceps
          id="biceps"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "biceps" && "bodymapActive"}
          onClick={() => handleClick("biceps")}
        />
        <FrontShouldres
          id="frontShoulders"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "frontShoulders" && "bodymapActive"}
          onClick={() => handleClick("frontShoulders")}
        />
        <Chest
          id="chest"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "chest" && "bodymapActive"}
          onClick={() => handleClick("chest")}
        />
        <Traps
          id="traps"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "traps" && "bodymapActive"}
          onClick={() => handleClick("traps")}
        />
        <FrontBody id="body" strokeColor={strokeColor} />
      </svg>

      <svg viewBox="0 0 660.46 1206.46" fill="none" className="max-h-[60vh]">
        <BackTraps
          id="traps"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "traps" && "bodymapActive"}
          onClick={() => handleClick("traps")}
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
          active={muscleId === "hamstrings" && "bodymapActive"}
          onClick={() => handleClick("hamstrings")}
        />
        <Glutes
          id="glutes"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "glutes" && "bodymapActive"}
          onClick={() => handleClick("glutes")}
        />
        <BackHands
          id="hands"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "hands" && "bodymapActive"}
          onClick={() => handleClick("hands")}
        />
        <BackForearms
          id="forearms"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "forearms" && "bodymapActive"}
          onClick={() => handleClick("forearms")}
        />
        <Triceps
          id="triceps"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "triceps" && "bodymapActive"}
          onClick={() => handleClick("triceps")}
        />
        <Lats
          id="lats"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "lats" && "bodymapActive"}
          onClick={() => handleClick("lats")}
        />
        <Lowerback
          id="lowerback"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "lowerback" && "bodymapActive"}
          onClick={() => handleClick("lowerback")}
        />
        <TrapsMiddle
          id="trapsMiddle"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "trapsMiddle" && "bodymapActive"}
          onClick={() => handleClick("trapsMiddle")}
        />
        <RearShoulders
          id="rearShoulders"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
          active={muscleId === "rearShoulders" && "bodymapActive"}
          onClick={() => handleClick("rearShoulders")}
        />
        <BackBody id="body" strokeColor={strokeColor} />
      </svg>
    </div>
  );
};

export default Bodymap;
