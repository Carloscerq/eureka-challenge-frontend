import { render, screen } from "@testing-library/react";
import Component from "./index";

test("CepInformationCard", async () => {
  render(<Component />);

  expect(
    await screen.findByText("Obtenha informações sobre seu CEP")
  ).toBeInTheDocument();
  expect(await screen.findByTitle("Informe o CEP")).toBeEnabled();
  expect(await screen.findByTitle("Submit")).toBeEnabled();
});
