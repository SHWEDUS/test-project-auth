import { Building2, Users, DollarSign, TrendingUp } from "lucide-react";
import { StatCard } from "../../../components/Card";
import { Grid } from "../../../components/Grid/Grid.styled.ts";
import { Section, SectionTitle } from "../../../components/Section/Section.styled.ts";

export function AdminDashboard() {
  return (
    <>
      <Grid marginBottom={"2rem"}>
        <StatCard
          title="Объекты"
          value="24"
          description="Всего объектов недвижимости"
          icon={Building2}
          color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        />
        <StatCard
          title="Клиенты"
          value="156"
          description="Активных клиентов"
          icon={Users}
          color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        />
        <StatCard
          title="Доход"
          value="2.4M ₽"
          description="За текущий месяц"
          icon={DollarSign}
          color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        />
        <StatCard
          title="Рост"
          value="+12%"
          description="По сравнению с прошлым месяцем"
          icon={TrendingUp}
          color="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        />
      </Grid>
      <Section>
        <SectionTitle>Последние операции</SectionTitle>
        <p style={{ color: "#6b7280" }}>Здесь будет список последних операций</p>
      </Section>
    </>
  );
}
