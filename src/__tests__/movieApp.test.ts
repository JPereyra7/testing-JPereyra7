import { IMovie } from "../ts/models/Movie";
import { handleSubmit } from "../ts/movieApp";
import { getData } from "../ts/services/movieService";

jest.mock("../ts/services/movieService.ts", () => ({
  getData: jest.fn(),
}));

describe("handleSubmit function", () => {
  beforeEach(() => {
    // Reset the mock-function getData prior each test
    (getData as jest.Mock).mockReset();
  });

  test("it should fetch & display movies when search is successfuly executed", async () => {
    const mockedMovies = [
      { Title: "Movie 1", Poster: "poster1.jpg" },
      { Title: "Movie 2", Poster: "poster2.jpg" },
    ];

    (getData as jest.Mock).mockResolvedValueOnce(mockedMovies);

    const searchTextInput = document.createElement("input");
    searchTextInput.id = "searchText";
    searchTextInput.value = "searchQuery";
    document.body.appendChild(searchTextInput);

    const movieContainer = document.createElement("div");
    movieContainer.id = "movie-container";
    document.body.appendChild(movieContainer);

    await handleSubmit();

    expect(getData).toHaveBeenCalledWith("searchQuery");

    const movieElements = movieContainer.querySelectorAll(".movie");
    expect(movieElements.length).toBe(2); //Expectingg 2 movies
  });

  test("it should display a 'No result' message when the search doesnt return a movie", async () => {
    (getData as jest.Mock<Promise<IMovie[]>>).mockResolvedValueOnce([]);

    const searchTextInput = document.createElement("input");
    searchTextInput.id = "searchText";
    searchTextInput.value = "searchQuery";
    document.body.appendChild(searchTextInput);

    const movieContainer = document.createElement("div");
    movieContainer.id = "movie-container";
    document.body.appendChild(movieContainer);

    await handleSubmit();

    expect(getData).toHaveBeenCalledWith("searchQuery");

    expect(movieContainer.innerHTML).toContain("");
  });

  test("it should show a 'No result' message when receiving an error", async () => {
    (getData as jest.Mock<Promise<IMovie[]>>).mockRejectedValueOnce(
      new Error("An error occurred")
    );
    const searchTextInput = document.createElement("input");
    searchTextInput.id = "searchText";
    searchTextInput.value = "searchQuery";
    document.body.appendChild(searchTextInput);

    const movieContainer = document.createElement("div");
    movieContainer.id = "movie-container";
    document.body.appendChild(movieContainer);

    await handleSubmit();

    expect(getData).toHaveBeenCalledWith("searchQuery");
    expect(movieContainer.innerHTML).toContain("");
  });
});