import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";
import imgTemp from "/Users/pedro.correa/source/repos/mobile-apps/mobileService/mobileService/src/assets/img/logo_anchieta.png";
import { api } from "../../services/api";

import { useEffect, useState } from "react";

type Message = {
  id: string;
  text: string;
  user: { name: string; avatar_url: string };
};

export function MessageList() {
  useEffect(() => {
    api.get<Message[]>("messages/lastThree").then(({ data }) => {
      setMessages(data);
    });
  }, []);

  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        {messages.map((message) => {
          return (
            <li key={message.id} className={styles.message}>
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
