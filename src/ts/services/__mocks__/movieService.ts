import { IMovie } from "../../models/Movie";

const peliculas: IMovie[] = [
  { Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test" },
  {
    Title: "Hobbit",
    imdbID: "test",
    Type: "test",
    Poster: "testtest",
    Year: "test",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(peliculas);
  });
};
