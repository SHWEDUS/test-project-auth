import type { UserRole } from "../typings/Auth.typings";

export interface IPermissions {
  canManageProperties: boolean;
  canManageClients: boolean;
  canManageFinance: boolean;
  canManageUsers: boolean;
}

export interface RoleConfig {
  name: string;
  displayName: string;
  description: string;
  color: string;
  icon: string;
  permissions: IPermissions;
}

export const ROLE_CONFIGS: Record<UserRole, RoleConfig> = {
  company_admin: {
    name: "company_admin",
    displayName: "Администратор",
    description: "Полный доступ к управлению системой",
    color: "#dc2626",
    icon: "👑",
    permissions: {
      canManageClients: true,
      canManageFinance: true,
      canManageProperties: true,
      canManageUsers: true,
    },
  },
  manager: {
    name: "manager",
    displayName: "Менеджер",
    description: "Управление клиентами и объектами",
    color: "#2563eb",
    icon: "💼",
    permissions: {
      canManageClients: true,
      canManageFinance: false,
      canManageProperties: true,
      canManageUsers: false,
    },
  },
  client: {
    name: "client",
    displayName: "Клиент",
    description: "Личный кабинет и документы",
    color: "#16a34a",
    icon: "👤",
    permissions: {
      canManageClients: false,
      canManageFinance: false,
      canManageProperties: false,
      canManageUsers: false,
    },
  },
  support: {
    name: "support",
    displayName: "Поддержка",
    description: "Обработка запросов пользователей",
    color: "#9333ea",
    icon: "🎧",
    permissions: {
      canManageClients: false,
      canManageFinance: false,
      canManageProperties: false,
      canManageUsers: false,
    },
  },
};

export const getRoleConfig = (role: UserRole): RoleConfig => {
  return ROLE_CONFIGS[role];
};
