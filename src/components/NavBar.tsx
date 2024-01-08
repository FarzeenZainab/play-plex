import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src="/Logo/logo.webp" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
