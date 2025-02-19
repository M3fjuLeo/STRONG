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
    <div className="flex gap-20 flex-col md:flex-row items-center justify-center mb-10">
      <svg viewBox="0 0 660.46 1206.46" fill="none" className="max-h-[80vh]">
        {/* <g
          id="calves"
          className={`bodymap ${muscleId === "calves" ? "bodymapActive" : ""}`}
          onClick={() => handleClick("calves")}
        >
          <path
            d="M502.8,1183.5c-.68,1.05-1.86,1.29-2.74,1.31-.93.02-1.69.81-1.69,1.77,0,.38-.14,1.54-.78,2.18-.39.38-.97.56-1.75.53-.8-.04-1.51.52-1.72,1.32,0,.03-.6,2.33-2.27,3.3-.86.51-1.88.59-3.12.24-.69-.19-1.44.07-1.86.67-.02.03-1.86,2.61-4.39,2.9-1.39.17-2.76-.38-4.19-1.68-.68-.62-1.71-.58-2.35.08-.04.04-4.49,4.53-10.15,3.77-4.52-.61-8.73-4.34-12.51-11.09-.21-.39-.58-.69-1.02-.81-.57-.17-14.2-4.29-13.15-17.37.18-5.53-4.76-8.41-11.01-12.05l-.97-.57c-5.92-3.45-9.83-5.73-6.12-27.69.89-7.14-.42-14.69-.48-15-.11-.62-.33-1.05-.9-1.25-.42-.36-3.52-3.52-2.29-17.55,1.51-17.34,2.94-33.72-17.75-101.36-1.11-3.85-2.68-6.08-4.18-8.24-4.08-5.83-8.31-11.86-2.32-56.42,2.35-21.34,3.14-29.8,2.5-34.69,6.67,6.59,14.23,10.26,21.63,10.26h.34c8.38-.13,15.5-4.85,20.06-13.29,4.38-8.1,7.01-11.48,12.38-13.17.31.97.72,2.16,1.23,3.63,5.67,16.3,20.73,59.59,8.3,131.92,0,.05,0,.1-.02.15-.7,7.93-1.67,16.17-2.6,24.14-2.43,20.85-4.73,40.55-2.42,53.28,1.72,10.5,2.43,14.98,2.6,20.5,0,.15.03.3.07.45,1.34,4.55,8.23,15.73,12.79,23.12,1.33,2.14,2.46,4,3.13,5.14.8,1.37,1.22,2.38,1.59,3.25,1.09,2.59,1.89,4.14,6.89,8.26.9.74,1.83,1.49,2.8,2.26,6.46,5.2,13.78,11.1,17.75,20.07,1.41,3.47,1.65,6.21.69,7.71Z"
            fill="currentColor"
            stroke="black"
            strokeWidth={2}
          ></path>
          <path
            d="M265.06,986.92c-1.51,2.16-3.08,4.4-4.18,8.22-20.71,67.67-19.28,84.05-17.76,101.38,1.22,14.03-1.87,17.2-2.29,17.55-.56.2-.79.63-.9,1.25-.05.31-1.37,7.86-.47,15.08,3.7,21.87-.21,24.15-6.13,27.61l-.98.57c-6.25,3.64-11.18,6.51-10.99,12.13,1.04,12.99-12.58,17.12-13.16,17.28-.44.12-.8.42-1.02.81-3.78,6.75-7.99,10.47-12.51,11.09-5.67.76-10.1-3.72-10.15-3.77-.63-.66-1.67-.7-2.35-.08-1.42,1.29-2.8,1.84-4.18,1.68-2.53-.29-4.39-2.88-4.41-2.9-.42-.6-1.15-.87-1.85-.67-1.25.35-2.28.27-3.13-.24-1.67-.98-2.27-3.28-2.27-3.3-.2-.8-.91-1.36-1.72-1.33-.79.03-1.36-.15-1.75-.53-.64-.64-.78-1.79-.78-2.17,0-.96-.74-1.76-1.68-1.77-.88-.02-2.07-.26-2.75-1.31-.96-1.5-.72-4.24.67-7.66,4-9.02,11.31-14.92,17.78-20.12.96-.77,1.89-1.52,2.79-2.26,5-4.13,5.8-5.67,6.89-8.26.37-.88.79-1.88,1.59-3.25.67-1.15,1.81-2.99,3.12-5.13,4.56-7.4,11.46-18.58,12.8-23.13.04-.15.07-.3.07-.45.17-5.52.88-10,2.6-20.47,2.31-12.77,0-32.47-2.42-53.32-.93-7.96-1.9-16.21-2.6-24.14,0-.05,0-.1-.02-.15-12.43-72.33,2.63-115.62,8.3-131.92.51-1.47.92-2.66,1.23-3.63,5.38,1.69,8,5.06,12.39,13.17,4.55,8.44,11.67,13.16,20.05,13.29h.35c7.39,0,14.95-3.67,21.62-10.27-.64,4.9.15,13.37,2.5,34.74,5.99,44.51,1.77,50.55-2.31,56.38Z"
            fill="currentColor"
            stroke="black"
            strokeWidth={2}
          ></path>
        </g> */}

        <Calves
          id="calves"
          fill="currentColor"
          stroke="black"
          strokeWidth={2}
        />
        <Quads id="quads" fill="currentColor" stroke="black" strokeWidth={2} />
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

      <svg viewBox="0 0 660.46 1206.46" fill="none" className="max-h-[80vh]">
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
