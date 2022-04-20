import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ICepInfo from "../../dto/cepInfo";
import styles from "./styles.module.css";

interface Props {
  data: ICepInfo;
  setData: Dispatch<SetStateAction<boolean>>;
}

const CepInformationCard: React.FC<Props> = ({ data, setData }) => {
  return (
    <section className={styles.Section}>
      <div>
        <h3 className={styles.Title}>{data.cep}</h3>
        <ul className={styles.List}>
          <li>Bairro: {data.bairro}</li>
          <li>Rua: {data.logradouro}</li>
          <li>Cidade: {data.localidade}</li>
        </ul>
      </div>
      <FontAwesomeIcon
        icon={faClose}
        onClick={(e) => setData(false)}
        className={styles.Icon}
        size='2x'
      />
    </section>
  );
};

export default CepInformationCard;
