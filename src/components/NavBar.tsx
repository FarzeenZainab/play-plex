import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput, { SearchProps } from "./SearchInput";

const NavBar = ({ onSearch }: SearchProps) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src="/Logo/logo.webp" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
