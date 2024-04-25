import { IMovie } from "../../models/Movie";

export const movies: IMovie[] = [
  {
    Title: "Aquaman",
    imdbID: "14540",
    Type: "Action",
    Poster: "aquaman.jpg",
    Year: "2019",
  },
  {
    Title: "Hobbit",
    imdbID: "1452",
    Type: "Action",
    Poster: "hobbit.jpg",
    Year: "2018",
  },
  {
    Title: "Lord of the Rings",
    imdbID: "14540",
    Type: "Action",
    Poster: "aquaman.jpg",
    Year: "2019",
  },
  {
    Title: "Star Wars",
    imdbID: "1452",
    Type: "Action",
    Poster: "hobbit.jpg",
    Year: "2018",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(movies);
  });
};
