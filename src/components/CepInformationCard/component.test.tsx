import { render, screen } from "@testing-library/react";
import Component from "./index";

test("CepInformationCard", async () => {
  render(
    <Component
      data={{
        cep: "41.830-498",
        logradouro: "Rua dois",
        bairro: "Centro",
        localidade: "São Paulo",
        complemento: "",
        uf: "SP",
        ibge: "3550308",
        gia: "1002",
        ddd: "11",
        siafi: "",
      }}
      setData={() => {}}
    />
  );
  expect(await screen.findByText("41.830-498")).toBeInTheDocument();
  expect(await screen.findByText("Rua: Rua dois")).toBeInTheDocument();
  expect(await screen.findByText("Bairro: Centro")).toBeInTheDocument();
  expect(await screen.findByText("Cidade: São Paulo")).toBeInTheDocument();
});
