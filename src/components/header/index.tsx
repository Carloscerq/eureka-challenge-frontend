import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from "./styles.module.css";

export default function Header() {
  return (
    <header>
      <h3 className={style.Title}>CepAPI</h3>
      <div className={style.SocialMedia}>
        <a href="https://github.com/Carloscerq">
          <FontAwesomeIcon
            className={style.SocialMediaIcon}
            icon={faGithub}
            size="3x"
            title="Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/carlos-cerqueira-5153991aa/">
          <FontAwesomeIcon
            className={style.SocialMediaIcon}
            icon={faLinkedin}
            size="3x"
            title="LinkedIn"
          />
        </a>
      </div>
    </header>
  );
}
