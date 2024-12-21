import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../authentication/useLogout";
import ButtonIcon from "../ui/ButtonIcon";

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon onClick={logout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
};

export default Logout;
