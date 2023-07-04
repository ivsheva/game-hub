import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../../Hooks/useGenres";
import getCroppedImageUrl from "../../Services/image-url";
import useGameQueryStore from "../../store";

const GenreList = () => {
  const { data } = useGenres();

  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  return (
    <>
      <Heading fontSize={"2xl"} as={"h1"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
