export enum UserRole {
  CompanyAdmin = "company_admin",
  Manager = "manager",
  Client = "client",
  Support = "support",
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  organization: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}
