import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/gamehub.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" borderRadius="100%" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
