import { IMovie } from "../../models/Movie";

export const movies: IMovie[] = [
  {
    Title: "Aquaman",
    imdbID: "14540",
    Type: "Action",
    Poster: "aquaman.jpg",
    Year: "2018",
  },
  {
    Title: "The Hobbit: An Unexpected Journey",
    imdbID: "1452",
    Type: "Action",
    Poster: "hobbit.jpg",
    Year: "2012",
  },
  {
    Title: "Lord of the Rings, The Fellowship of the Ring",
    imdbID: "14540",
    Type: "Action",
    Poster: "lotro.jpg",
    Year: "2001",
  },
  {
    Title: "Star Wars: Episode III Revenge of the Sith",
    imdbID: "1452",
    Type: "Action",
    Poster: "starwars.jpg",
    Year: "2005",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(movies);
  });
};
