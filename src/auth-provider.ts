import { User } from "./pages/project-list/searchPanel";
const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = "__auth_provider_key__";

export const getToken = () =>
  localStorage.getItem(localStorageKey) || undefined;

const handleUserResponse = (user: User) => {
  localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((result) => {
      handleUserResponse(result.user);
      return result.user;
    });
};

export const register = async (data: {
  username: string;
  password: string;
}) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((result) => {
      handleUserResponse(result.user);
      return result.user;
    });
};

export const logout = () => {
  return localStorage.removeItem(localStorageKey);
};
