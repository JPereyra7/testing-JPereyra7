export const displayNoResult = (container: HTMLDivElement) => {
    let noMessage = document.createElement("p");
  
    noMessage.innerHTML = "Inga sökresultat att visa";
  
    container.appendChild(noMessage);
  };