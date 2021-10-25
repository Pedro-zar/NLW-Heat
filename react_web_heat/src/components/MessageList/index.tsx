import styles from "./styles.module.scss";
import logoImg from "../../assets/logo.svg";
import { api } from "../../services/api";
import io from "socket.io-client";
import { useEffect, useState } from "react";

type Message = {
  id: string;
  text: string;
  user: { name: string; avatar_url: string };
};

const messagesQueue: Message[] = [];

const socket = io("http://localhost:4000");

socket.on("new_message", (newMessage) => messagesQueue.push(newMessage));

export function MessageList() {
  useEffect(() => {
    api.get<Message[]>("messages/lastThree").then(({ data }) => {
      setMessages(data);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((state) =>
          [messagesQueue[0], state[0], state[1]].filter(Boolean)
        );
      }
      messagesQueue.shift();
    }, 3000);
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
