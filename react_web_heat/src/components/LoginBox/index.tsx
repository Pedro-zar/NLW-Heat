import { useContext } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { AuthContext } from "../../context/auth";

import styles from "./styles.module.scss";

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre com sua conta Github</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted />
        Login
      </a>
    </div>
  );
}
