import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading, errorMessages } = useGenres();

  // When something changes internally inside our component, we tell the parent component about the changes
  // This is called lifting the state up
  const handleClick = (genre: Genre) => {
    onSelectGenre(genre);
  };

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

              <Button
                onClick={() => {
                  handleClick(genre);
                }}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
