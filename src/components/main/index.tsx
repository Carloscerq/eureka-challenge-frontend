import React, { FormEvent, useState, ChangeEvent } from "react";
import cepService from "../../services/cepService";
import ICepInfo from "../../dto/cepInfo";
import styles from "./styles.module.css";

export default function Main() {
  const [cepInfo, setCepInfo] = useState<ICepInfo | boolean>(false);
  const [cep, setCep] = useState<string>("");
  const regexCepValidator = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (regexCepValidator.test(cep)) {
      const cepNumber = cep.replace(regexCepValidator, "$1$2$3");
      const cepInfo = await cepService.getCep(cepNumber);
      setCepInfo(cepInfo);
    }
  };

  const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value;

    // Check if it's everthing ok on regex
    if (str.length <= 8) {
      setCep(str);
      if (regexCepValidator.test(str)) {
        setCep(str.replace(regexCepValidator, "$1.$2-$3"));
      }
    }
  };

  return (
    <main>
      <h1>Obtenha informações sobre seu CEP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Informe o CEP:
          <input
            type="text"
            name="CEP"
            value={cep}
            onChange={handleCepChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
