import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../Hooks/usePlatform";
import usePlatforms from "../../Hooks/usePlatforms";
import useGameQueryStore from "../../store";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );

  const selectedPlatform = usePlatform(selectedPlatformId);
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
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
