import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext.tsx";
import { RoleBadge } from "../RoleBadge";
import {
  HeaderContainer,
  Logo,
  LogoIcon,
  MobileRoleBadge,
  UserAvatar,
  UserInfo,
  UserName,
  UserSection,
} from "./Header.styled.ts";
import {
  Dropdown,
  DropdownEmail,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownName,
  UserMenu,
} from "../Dropdown/Dropdown.styled.ts";

export function Header() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  if (!user) return null;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon>🏢</LogoIcon>
        СУН
      </Logo>
      <UserSection>
        <UserInfo>
          <UserName>
            Добро пожаловать, {user.organization.toLocaleLowerCase()} {user.name}!
          </UserName>
        </UserInfo>

        <MobileRoleBadge>
          <RoleBadge role={user.role} showIcon={false} />
        </MobileRoleBadge>
        <UserMenu>
          <UserAvatar onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{getInitials(user.name)}</UserAvatar>

          <Dropdown $isOpen={isDropdownOpen}>
            <DropdownHeader>
              <DropdownName>{user.name}</DropdownName>
              <DropdownEmail>{user.email}</DropdownEmail>
              <RoleBadge role={user.role} />
            </DropdownHeader>

            <DropdownMenu>
              <DropdownItem onClick={() => setIsDropdownOpen(false)}>
                <span>⚙️</span>
                Настройки
              </DropdownItem>
              <DropdownItem onClick={() => setIsDropdownOpen(false)}>
                <span>👤</span>
                Профиль
              </DropdownItem>
              <DropdownItem onClick={() => setIsDropdownOpen(false)}>
                <span>❓</span>
                Помощь
              </DropdownItem>
              <DropdownItem className="danger" onClick={logout}>
                <span>🚪</span>
                Выйти
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </UserMenu>
      </UserSection>
    </HeaderContainer>
  );
}
