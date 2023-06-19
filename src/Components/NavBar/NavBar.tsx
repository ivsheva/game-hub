import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/gamehub.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" borderRadius="100%" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
