import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../Assets/gamehub.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Link to="/">
          <Image src={logo} boxSize={"60px"} />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
