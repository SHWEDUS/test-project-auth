import { createContext, useContext, useState, useEffect, useCallback, type PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import { clearAuth, getToken, getUser, isTokenValid, saveToken, saveUser } from "../api/auth.ts";
import { mockLogin } from "../api/mockApi.ts";
import type { AuthContextType, LoginCredentials, User } from "../typings/Auth.typings.ts";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = () => {
      const savedToken = getToken();
      const savedUser = getUser();

      if (savedToken && savedUser && isTokenValid(savedToken)) {
        setToken(savedToken);
        setUser(savedUser);
      } else {
        clearAuth();
      }

      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      try {
        setIsLoading(true);
        const response = await mockLogin(credentials);

        saveToken(response.token);
        saveUser(response.user);

        setToken(response.token);
        setUser(response.user);

        navigate("/dashboard");
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [navigate],
  );

  const logout = useCallback(() => {
    clearAuth();
    setToken(null);
    setUser(null);
    navigate("/login");
  }, [navigate]);

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!user && !!token,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
