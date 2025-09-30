import { Navigate, Route, Routes } from "react-router";
import { DashboardLayout } from "./components/Layout/DashboardLayout.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { ClientsPage } from "./features/ClientsPage";
import { DashboardPage } from "./features/DashboardPage";
import { FinancePage } from "./features/FinancePage";
import { KnowledgePage } from "./features/KnowledgePage";
import { LoginPage } from "./features/LoginPage";
import { PaymentsPage } from "./features/PaymentsPage";
import { PropertiesPage } from "./features/PropertiesPage";
import { RentalPage } from "./features/RentalPage";
import { TasksPage } from "./features/TasksPage";
import { TicketsPage } from "./features/TicketsPage";
import { UsersPage } from "./features/UsersPage";
import { UserRole } from "./typings/Auth.typings.ts";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/properties"
            element={
              <ProtectedRoute allowedRoles={[UserRole.CompanyAdmin, UserRole.Manager]}>
                <PropertiesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/clients"
            element={
              <ProtectedRoute allowedRoles={[UserRole.CompanyAdmin, UserRole.Manager]}>
                <ClientsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/finance"
            element={
              <ProtectedRoute allowedRoles={[UserRole.CompanyAdmin]}>
                <FinancePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <ProtectedRoute allowedRoles={[UserRole.CompanyAdmin]}>
                <UsersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/tasks"
            element={
              <ProtectedRoute allowedRoles={[UserRole.Manager]}>
                <TasksPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/rental"
            element={
              <ProtectedRoute allowedRoles={[UserRole.Client]}>
                <RentalPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/payments"
            element={
              <ProtectedRoute allowedRoles={[UserRole.Client]}>
                <PaymentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/tickets"
            element={
              <ProtectedRoute allowedRoles={[UserRole.Support]}>
                <TicketsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/knowledge"
            element={
              <ProtectedRoute allowedRoles={[UserRole.Support]}>
                <KnowledgePage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
