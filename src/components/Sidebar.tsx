import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
} from "react-icons/hi2";
import { CiDumbbell } from "react-icons/ci";
import Logo from "../ui/Logo";
import Link from "../ui/Link";

const Sidebar = () => {
  return (
    <div className="lg:h-lvh lg:flex lg:relative dark:bg-gray-800 bg-white p-4 gap-10 lg:flex-col lg:w-[18rem] border-t-[1px] fixed bottom-0 w-full left-0 lg:border-r-[1px] dark:border-gray-400 lg:border-t-0">
      <div className="hidden lg:block">
        <Logo />
      </div>
      <ul className="gap-2 justify-around flex lg:flex-col">
        <Link to="home" title="Home" icon={<HiOutlineHome />} />
        <Link to="exercises" title="Exercises" icon={<CiDumbbell />} />
        <Link to="routines" title="Rutines" icon={<HiOutlineCalendarDays />} />
        <Link to="settings" title="Settings" icon={<HiOutlineCog6Tooth />} />
      </ul>
    </div>
  );
};

export default Sidebar;
