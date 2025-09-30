import { Calendar, CheckCircle, ClipboardList, Users } from "lucide-react";
import { StatCard } from "../../../components/Card";
import { Grid } from "../../../components/Grid/Grid.styled.ts";

export function ManagerDashboard() {
  return (
    <Grid>
      <StatCard
        title="Активные задачи"
        value="12"
        description="Требуют выполнения"
        icon={ClipboardList}
        color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      <StatCard
        title="Клиенты"
        value="45"
        description="Под вашим управлением"
        icon={Users}
        color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      />
      <StatCard
        title="Просмотры"
        value="8"
        description="Запланировано на неделю"
        icon={Calendar}
        color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      />
      <StatCard
        title="Завершено"
        value="34"
        description="Задач в этом месяце"
        icon={CheckCircle}
        color="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
      />
    </Grid>
  );
}
