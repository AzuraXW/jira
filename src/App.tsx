import React from "react";
import "./App.css";
// import Index from "./pages/project-list/index";
import UnauthenticatedApp from "unauthenticated-app";
import AuthenticatedApp from "authenticated-app";
import { useAuth } from "context/auth-content";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
