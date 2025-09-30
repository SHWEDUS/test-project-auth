import { AlertCircle, CheckCircle, Clock, Ticket } from "lucide-react";
import { StatCard } from "../../../components/Card";
import { Grid } from "../../../components/Grid/Grid.styled.ts";

export function SupportDashboard() {
  return (
    <Grid>
      <StatCard
        title="Открытые тикеты"
        value="23"
        description="Требуют обработки"
        icon={Ticket}
        color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      <StatCard
        title="В ожидании"
        value="8"
        description="Ожидают ответа клиента"
        icon={Clock}
        color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      />
      <StatCard
        title="Решено"
        value="145"
        description="За текущий месяц"
        icon={CheckCircle}
        color="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
      />
      <StatCard
        title="Срочные"
        value="3"
        description="Требуют немедленного внимания"
        icon={AlertCircle}
        color="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
      />
    </Grid>
  );
}
