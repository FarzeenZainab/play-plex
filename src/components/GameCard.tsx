import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import getCroppedImageUrl from "../services/image-url";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image, 600, 400)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
