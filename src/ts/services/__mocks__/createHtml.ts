import { IMovie } from "../../models/Movie";

export const createHtml = (movies: IMovie[], container: HTMLDivElement) => {
    for (let i = 0; i < movies.length; i++) {
      let movie = document.createElement("div");
      let title = document.createElement("h3");
      let img = document.createElement("img");
  
      movie.classList.add("movie");
      title.innerHTML = movies[i].Title;
      img.src = movies[i].Poster;
      img.alt = movies[i].Title;
  
      movie.appendChild(title);
      movie.appendChild(img);
  
      container.appendChild(movie);
    }
  };
  
  export const displayNoResult = (container: HTMLDivElement) => {
    let noMessage = document.createElement("p");
  
    noMessage.innerHTML = "Inga sökresultat att visa";
  
    container.appendChild(noMessage);
  };