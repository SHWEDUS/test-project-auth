import { Home, CreditCard, FileText, Calendar } from "lucide-react";
import { StatCard } from "../../../components/Card";
import { Grid } from "../../../components/Grid/Grid.styled.ts";

export function ClientDashboard() {
  return (
    <Grid>
      <StatCard
        title="Моя аренда"
        value="1"
        description="Активный договор"
        icon={Home}
        color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      <StatCard
        title="Платежи"
        value="150K ₽"
        description="Ежемесячный платеж"
        icon={CreditCard}
        color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      />
      <StatCard
        title="Документы"
        value="5"
        description="Доступных документов"
        icon={FileText}
        color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      />
      <StatCard
        title="Следующий платеж"
        value="15 дней"
        description="До следующего платежа"
        icon={Calendar}
        color="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
      />
    </Grid>
  );
}
