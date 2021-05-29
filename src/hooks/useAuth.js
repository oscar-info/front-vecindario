import { useLocalStorage, writeStorage } from "@rehooks/local-storage";

export default function useAuth() {
  const [authToken] = useLocalStorage("auth_token");

  const handleAuth = (token) => {
    writeStorage("auth_token", token);
  };

  return { authToken, handleAuth };
}
