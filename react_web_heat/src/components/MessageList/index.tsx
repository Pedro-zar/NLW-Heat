import styles from "./styles.module.scss";

import logoImg from "../../assets/logo.svg";
import imgTemp from "/Users/pedro.correa/source/repos/mobile-apps/mobileService/mobileService/src/assets/img/logo_anchieta.png";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Mensagem de teste em cima da imagem
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src={imgTemp} alt="" />
            </div>
            <span>Nome do Usuário</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Mensagem de teste em cima da imagem
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src={imgTemp} alt="" />
            </div>
            <span>Nome do Usuário</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Mensagem de teste em cima da imagem
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src={imgTemp} alt="" />
            </div>
            <span>Nome do Usuário</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
