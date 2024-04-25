import { displayNoResult } from "../ts/displayNoResult";



describe("Testing the displayNoResult function", () => {
    test("should display 'No result' message", () => {
      const container = document.createElement("div");
      displayNoResult(container);
      expect(container.innerHTML).toContain("Inga sökresultat att visa");
    });
  });