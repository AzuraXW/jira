import qs from "qs";
import { logout } from "auth-provider";
import { useAuth } from "context/auth-content";
const apiUrl = process.env.REACT_APP_API_URL;

interface CustomConfig extends RequestInit {
  data?: object;
  token?: string;
}

export default function http(
  endpoint: string,
  { data, token, headers, ...customConfig }: CustomConfig = {}
) {
  // 组合config
  const config: CustomConfig = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  // 携带参数
  if ((config.method as string).toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data);
  }
  return fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      logout();
      // window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
