import useData from "../hooks/useData";

// interface of a genre
export interface Genre {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
