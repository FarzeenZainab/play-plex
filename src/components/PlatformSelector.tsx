import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, errorMessages } = usePlatforms();

  const handlePlatformChange = (platform: Platform) => {
    onSelectPlatform(platform);
  };

  if (errorMessages) {
    return null;
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        width={180}
        textAlign="left"
      >
        {selectedPlatform ? selectedPlatform?.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => {
          return (
            <MenuItem
              key={platform.id}
              onClick={() => {
                handlePlatformChange(platform);
              }}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
