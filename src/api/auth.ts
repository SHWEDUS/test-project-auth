import type { User } from "../typings/Auth.typings.ts";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export const saveToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

export const removeToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
};

export const saveUser = (user: User): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
};

export const getUser = (): User | null => {
  if (typeof window !== "undefined") {
    const userStr = localStorage.getItem(USER_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error("Error parsing user data:", error);
        return null;
      }
    }
  }
  return null;
};

export const removeUser = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_KEY);
  }
};

export const decodeToken = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

export const isTokenValid = (token: string): boolean => {
  try {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) return false;

    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (e) {
    return false;
  }
};

export const clearAuth = (): void => {
  removeToken();
  removeUser();
};
