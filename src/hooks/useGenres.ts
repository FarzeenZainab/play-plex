import useData from "../hooks/useData";

// interface of a genre
interface Genre {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
