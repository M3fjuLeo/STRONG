import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
} from "react-icons/hi2";
import { CiDumbbell } from "react-icons/ci";
import Link from "../ui/Link";
import Logo from "../ui/Logo";

const Sidebar = () => {
  return (
    <div className="h-lvh flex p-4 gap-10 flex-col w-[18rem] border-r-[1px]">
      <Logo />
      <ul className="gap-2 flex flex-col">
        <Link to="home" title="Home" icon={<HiOutlineHome />} />
        <Link to="exercises" title="Exercises" icon={<CiDumbbell />} />
        <Link to="history" title="History" icon={<HiOutlineCalendarDays />} />
        <Link to="settings" title="Settings" icon={<HiOutlineCog6Tooth />} />
      </ul>
    </div>
  );
};

export default Sidebar;
