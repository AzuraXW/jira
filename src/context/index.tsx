import { ReactNode } from "react";
import { AuthProvider } from "./auth-content";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
