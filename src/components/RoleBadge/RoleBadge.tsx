import { getRoleConfig } from "../../configs/RoleConfig.ts";
import type { UserRole } from "../../typings/Auth.typings.ts";
import { Badge, Icon } from "./RoleBadge.styled.ts";

interface Props {
  role: UserRole;
  showIcon?: boolean;
}

export function RoleBadge({ role, showIcon = true }: Props) {
  const config = getRoleConfig(role);

  return (
    <Badge $color={config.color}>
      {showIcon && <Icon>{config.icon}</Icon>}
      {config.displayName}
    </Badge>
  );
}
