import React, { useState, ReactNode } from "react";
import * as auth from "auth-provider";
import { User } from "pages/project-list/searchPanel";
import http from "utils/http";
import { useMount } from "hooks";

interface AuthForm {
  username: string;
  password: string;
}
// 定义一个context
const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<any>;
      register: (form: AuthForm) => Promise<any>;
      logout: () => void;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

// 初始化用户信息
async function bootstrapUser() {
  let user = null;
  const token = auth.getToken();
  if (token) {
    user = (await http("me", { token })).user;
  }
  return user;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useMount(() => {
    bootstrapUser().then(setUser);
  });
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const logout = () => auth.logout();
  const register = (form: AuthForm) => auth.register(form).then(setUser);

  return (
    <AuthContext.Provider value={{ login, logout, register, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("error");
  }
  console.log(context);
  return context;
};
