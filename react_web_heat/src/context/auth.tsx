import { createContext, ReactNode, useState } from "react";
import { useEffect } from "react";
import { api } from "./../services/api";

type AuthProvider = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  logOut: () => void;
};

type AuthResponse = {
  token: string;
  user: { id: string; avatar_url: string; name: string; login: string };
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=5ae4a21ccf90211daa92`;

  async function signIn(githubCode: string) {
    const { data } = await api.post<AuthResponse>("/authenticate", {
      code: githubCode,
    });
    const { token, user } = data;
    localStorage.setItem("@anchieta:token", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  }

  function logOut() {
    setUser(null);
    localStorage.removeItem("@anchieta:token");
  }

  useEffect(() => {
    const token = localStorage.getItem("@anchieta:token");

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get<User>("profile").then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split("?code=");
      window.history.pushState({}, "", urlWithoutCode);
      signIn(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signInUrl, user, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
