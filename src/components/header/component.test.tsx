import { render, screen } from "@testing-library/react";
import Component from "./index";

test("CepInformationCard", async () => {
  render(<Component />);

  expect(await screen.findByText("CepAPI")).toBeInTheDocument();
  expect(await screen.findByTitle("Github")).toBeInTheDocument();
  expect(await screen.findByTitle("LinkedIn")).toBeInTheDocument();
});
