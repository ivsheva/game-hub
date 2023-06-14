import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/gamehub.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" borderRadius="100%" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
