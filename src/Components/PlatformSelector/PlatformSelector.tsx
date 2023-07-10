import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import Platform from "../../Entities/Platform";
import UsePlatform from "../../Hooks/UsePlatform";
import UsePlatforms from "../../Hooks/UsePlatforms";
import useGameQueryStore from "../../store";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );

  const selectedPlatform = UsePlatform(selectedPlatformId);
  const { data, error } = UsePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform: Platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
