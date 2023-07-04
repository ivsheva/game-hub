import { HStack, Image } from "@chakra-ui/react";
import logo from "../../Assets/gamehub.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Image
          src={logo}
          boxSize={"60px"}
          onClick={() => {
            location.reload();
          }}
        />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
