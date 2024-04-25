import { createHtml } from "./ts/createHtml";
import { displayNoResult } from "./ts/displayNoResult";
import { IMovie } from "./ts/models/Movie";
import { getData } from "./ts/services/movieService";

let movies: IMovie[] = [];

export async function handleSubmit() {
  let searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;

  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  container.innerHTML = "";

  try {
    movies = await getData(searchText); //Vet inte hur man ska importa

    if (movies.length > 0) {
      createHtml(movies, container);
    } else {
      displayNoResult(container);
    }
  } catch {
    displayNoResult(container);
  }
}
