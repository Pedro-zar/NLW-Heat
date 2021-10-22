import { VscGithubInverted } from "react-icons/vsc";

import styles from "./styles.module.scss";

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Login</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted />
        Sign in
      </a>
    </div>
  );
}
