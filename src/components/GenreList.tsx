import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres?.map((genre, index) => {
        return <li key={index}>{genre.name}</li>;
      })}
    </ul>
  );
};

export default GenreList;
