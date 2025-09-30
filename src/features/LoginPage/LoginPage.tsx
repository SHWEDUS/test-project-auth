import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext.tsx";
import { LoginForm } from "./LoginForm";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
`;

export function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
}
