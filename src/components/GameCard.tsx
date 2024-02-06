import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import getCroppedImageUrl from "../services/image-url";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image, 600, 400)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>

        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
