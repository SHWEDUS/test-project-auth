import styled from "styled-components";

export const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
`;

export const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #6b7280;
  text-align: center;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
