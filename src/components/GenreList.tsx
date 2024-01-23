import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, errorMessages } = useGenres();

  if (isLoading) return <Spinner />;

  if (errorMessages) return null;

  return (
    <List>
      {genres?.map((genre, index) => {
        return (
          <ListItem key={index} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius="8px"
              />

              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
