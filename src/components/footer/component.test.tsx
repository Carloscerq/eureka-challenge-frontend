import { render, screen } from "@testing-library/react";
import Component from "./index";

test("CepInformationCard", async () => {
  render(<Component />);

  expect(await screen.findByText("Frontend")).toBeInTheDocument();
  expect(await screen.findByText("Backend")).toBeInTheDocument();
});
