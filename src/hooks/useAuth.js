import { useLocalStorage, writeStorage, deleteFromStorage } from "@rehooks/local-storage";

export default function useAuth() {
  const [authToken] = useLocalStorage("auth_token");

  const handleAuth = (token) => {
    writeStorage("auth_token", token);
  };

  const deleteSession = () => {

    deleteFromStorage('auth_token');

  };

  return { authToken, handleAuth, deleteSession };
}
