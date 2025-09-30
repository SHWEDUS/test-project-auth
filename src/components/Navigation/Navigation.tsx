import { useLocation } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { UserRole } from "../../typings/Auth.typings.ts";
import { Nav, NavContent, NavLink } from "./Navigation.styled.ts";

interface NavItem {
  label: string;
  href: string;
  roles: UserRole[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Главная",
    href: "/dashboard",
    roles: [UserRole.CompanyAdmin, UserRole.Manager, UserRole.Client, UserRole.Support],
  },
  {
    label: "Объекты",
    href: "/dashboard/properties",
    roles: [UserRole.CompanyAdmin, UserRole.Manager],
  },
  {
    label: "Клиенты",
    href: "/dashboard/clients",
    roles: [UserRole.CompanyAdmin, UserRole.Manager],
  },
  {
    label: "Финансы",
    href: "/dashboard/finance",
    roles: [UserRole.CompanyAdmin],
  },
  {
    label: "Пользователи",
    href: "/dashboard/users",
    roles: [UserRole.CompanyAdmin],
  },
  {
    label: "Мои задачи",
    href: "/dashboard/tasks",
    roles: [UserRole.Manager],
  },
  {
    label: "Моя аренда",
    href: "/dashboard/rental",
    roles: [UserRole.Client],
  },
  {
    label: "Платежи",
    href: "/dashboard/payments",
    roles: [UserRole.Client],
  },
  {
    label: "Тикеты",
    href: "/dashboard/tickets",
    roles: [UserRole.Support],
  },
  {
    label: "База знаний",
    href: "/dashboard/knowledge",
    roles: [UserRole.Support],
  },
];

export function Navigation() {
  const { user } = useAuth();
  const { pathname } = useLocation();

  if (!user) return null;

  const visibleItems = NAV_ITEMS.filter(item => item.roles.includes(user.role));

  return (
    <Nav>
      <NavContent>
        {visibleItems.map(item => (
          <NavLink key={item.href} to={item.href} $isActive={pathname === item.href}>
            {item.label}
          </NavLink>
        ))}
      </NavContent>
    </Nav>
  );
}
