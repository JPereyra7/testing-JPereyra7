import { IMovie } from "./models/Movie";
import { handleSubmit } from "../handleSubmit";

export let movies: IMovie[] = [];

export const init = () => {
  let form = document.getElementById("searchForm") as HTMLFormElement;
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    handleSubmit();
  });
};
export { handleSubmit };

