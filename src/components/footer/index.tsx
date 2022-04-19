import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer>
      <p className={styles.DevNameInfo}>
        Feito com <FontAwesomeIcon icon={faHeart} /> por Carlos Cerqueira
      </p>
      <div className={styles.ProjectInfo}>
        Saiba mais sobre o projeto:
        <ul className={styles.ProjectInfoList}>
          <li>
            <a href="https://github.com/Carloscerq/eureka-challenge-frontend">Frontend</a>
          </li>
          <li>
            <a href="https://github.com/Carloscerq/eureka-challenge-backend">
              Backend
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
