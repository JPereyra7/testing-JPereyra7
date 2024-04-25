import * as displaynoresult from "../ts/displayNoResult";
import { IMovie } from "../ts/models/Movie";
import { handleSubmit } from "../handleSubmit"; 
import * as movieService from "../ts/services/movieService";
import * as createHtml from "../ts/createHtml";

jest.mock("./../ts/services/movieService.ts");

describe("Testing the handleSubmit functionality", () => {
  let mockDisplayNoResult: jest.SpyInstance<void>;
  let mockCreateHtml: jest.SpyInstance<void>;

  beforeEach(() => {
    mockCreateHtml = jest.spyOn(createHtml, "createHtml");
    mockDisplayNoResult = jest.spyOn(displaynoresult, "displayNoResult");
  });

  afterEach(() => {
    mockCreateHtml.mockReset();
    mockDisplayNoResult.mockReset();
  });

  test("It should call the createHtml function", async () => {
    document.body.innerHTML = `
      <div id="app">
      <form id="searchForm">
      <input type="text" id="searchText" placeholder="Skriv titel här"/>
      <button type="submit" id="search">Sök</button>
      </form>
      <div id="movie-container"></div>
      </div> 
      `;

    await handleSubmit();
    const movieContainer = document.getElementsByClassName("movie");

    expect(mockCreateHtml).toHaveBeenCalled();
    expect(movieContainer).toHaveLength(4);
  });

  document.body.innerHTML = `
    <div id="app">
    <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här"/>
    <button type="submit" id="search">Sök</button>
    </form>
    <div id="movie-container"></div>
    </div> 
    `;

  test("It should call on the displayNoResult functionality", async () => {
    const mockGetData = jest.spyOn(movieService, "getData");
    mockGetData.mockImplementation((): Promise<IMovie[]> => {
      return Promise.resolve([]);
    });

    await handleSubmit();
    expect(mockDisplayNoResult).toHaveBeenCalled();
    const movieContainer = document.getElementsByClassName("movie");
    expect(movieContainer).toHaveLength(0);
  });
});