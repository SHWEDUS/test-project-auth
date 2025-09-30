import { useAuth } from "../../contexts/AuthContext.tsx";
import { UserRole } from "../../typings/Auth.typings.ts";
import { AdminDashboard } from "./AdminDashboard";
import { ClientDashboard } from "./ClientDashboard";
import { ManagerDashboard } from "./ManagerDashboard";
import { SupportDashboard } from "./SupportDashboard";

export function DashboardPage() {
  const { user } = useAuth();

  if (!user) return null;

  const renderDashboard = () => {
    switch (user.role) {
      case UserRole.CompanyAdmin:
        return <AdminDashboard />;
      case UserRole.Manager:
        return <ManagerDashboard />;
      case UserRole.Client:
        return <ClientDashboard />;
      case UserRole.Support:
        return <SupportDashboard />;
      default:
        return null;
    }
  };

  return <>{renderDashboard()}</>;
}
