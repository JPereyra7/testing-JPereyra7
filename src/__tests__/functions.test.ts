import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("Testing functions map", ()=> {
    test("it should test sorting with default descending order", ()=> {
        const peliculas: IMovie[] = [
            {Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"},
            {Title: "Hobbit", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"}
        ];
        const result = movieSort(peliculas);

        expect(result).toEqual([
            {Title: "Hobbit", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"},
            {Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"}
        ]);
    });

    test("test the ascending order moviesort", ()=> {
        const peliculas: IMovie[] = [
            {Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"},
            {Title: "Hobbit", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"}
        ];
        const result = movieSort(peliculas, false);

        expect(result).toEqual([
            {Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"},
            {Title: "Hobbit", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"}
        ]);
    });

    test("testing moviesort with empty array", ()=> {
        const peliculas: IMovie[] = [];
        const result = movieSort(peliculas);

        expect(result).toEqual([]);
    });

    test("it should test moviesort with titles that are duplicated!", ()=> {
        const peliculas: IMovie[] = [
            {Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"},
            {Title: "Hobbit", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"},
            {Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"}
        ];
        const result = movieSort(peliculas);

        expect(result).toEqual([
            {Title: "Hobbit", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"},
            {Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"},
            {Title: "Star", imdbID: "test", Type: "test", Poster: "testtest", Year: "test"}
        ]);
    });
});