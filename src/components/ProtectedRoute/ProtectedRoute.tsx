import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext.tsx";
import type { UserRole } from "../../typings/Auth.typings.ts";
import { LoadingContainer, LoadingSpinner, LoadingText, LoadingWrapper } from "../Loading/Loading.styled.ts";

interface Props {
  allowedRoles?: UserRole[];
}

export function ProtectedRoute({ children, allowedRoles }: PropsWithChildren<Props>) {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingWrapper>
          <LoadingSpinner />
          <LoadingText>Проверка доступа...</LoadingText>
        </LoadingWrapper>
      </LoadingContainer>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
