//Här ska all CreateHtml

import { createHtml } from "../ts/createHtml";
import { movies } from "../ts/services/__mocks__/movieService";



describe("createHtml function", () => {
    test("should create HTML elements for each movie", () => {
      document.body.innerHTML = `
          <div id="app">
          <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <button type="submit" id="search">Sök</button>
          </form>
          <div id="movie-container"></div>
        </div>
        `;

        // let movies: IMovie[] = "";
        
      const container = document.createElement("div");
      createHtml(movies, container);
      expect(container.querySelectorAll(".movie").length).toBe(4);
      //Måste lägga till 2 arg. en array och en container
    });
  });