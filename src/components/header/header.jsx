import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const { user, onClose } = useTelegram();
  return (
    <div className={"header"}>
      <Button onCLick={onClose}>Close</Button>
      <span className={"username"}>{user?.username}</span>
    </div>
  );
};

export default Header;
