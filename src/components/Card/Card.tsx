import type { LucideIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle, CardValue, IconWrapper } from "./Card.styled.ts";

interface Props {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  color: string;
}

export function StatCard({ title, value, description, icon: Icon, color }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <IconWrapper $color={color}>
          <Icon size={20} />
        </IconWrapper>
      </CardHeader>
      <CardValue>{value}</CardValue>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
