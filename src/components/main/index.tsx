import React, { FormEvent, useState, ChangeEvent } from "react";
import cepService from "../../services/cepService";
import ICepInfo from "../../dto/cepInfo";
import styles from "./styles.module.css";
import CepInformationCard from "../CepInformationCard";

export default function Main() {
  const [cepInfo, setCepInfo] = useState<ICepInfo>();
  const [showCard, setShowCard] = useState<boolean>(false);
  const [cep, setCep] = useState<string>("");
  const regexCepValidator = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (regexCepValidator.test(cep)) {
      const cepNumber = cep.replace(regexCepValidator, "$1$2$3");
      try {
        const cepInfo = await cepService.getCep(cepNumber);
        if (cepInfo) {
          setCepInfo(cepInfo);
          setShowCard(true);
        }
      } catch (err) {
        alert("Cep invalido!");
      }
    }
  };

  const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value;

    // Check if it's everthing ok on regex
    if (str.length <= 8 || cep.includes(str)) {
      if (regexCepValidator.test(str)) {
        setCep(str.replace(regexCepValidator, "$1.$2-$3"));
      } else {
        setCep(str);
      }
    }
  };

  return (
    <main className={styles.Main}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <h1 className={styles.Title}>Obtenha informações sobre seu CEP</h1>
        <label className={styles.FormLabel}>
          Informe o CEP:
          <br />
          <input
            type="text"
            name="CEP"
            value={cep}
            onChange={handleCepChange}
            className={styles.FormLabelInput}
          />
        </label>
        <input
          className={styles.FormSubmitButton}
          type="submit"
          value="Submit"
        />
      </form>
      {showCard ? (
        <CepInformationCard data={cepInfo as ICepInfo} setData={setShowCard} />
      ) : (
        ""
      )}
    </main>
  );
}
