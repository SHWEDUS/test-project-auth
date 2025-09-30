import styled from 'styled-components'

export const Button = styled.button<{ $isLoading?: boolean }>`
  width: 100%;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: ${(props) => (props.$isLoading ? "#9ca3af" : "#3b82f6")};
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.$isLoading ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  margin-top: 0.5rem;

  &:hover {
    background: ${(props) => (props.$isLoading ? "#9ca3af" : "#2563eb")};
    transform: ${(props) => (props.$isLoading ? "none" : "translateY(-1px)")};
    box-shadow: ${(props) => (props.$isLoading ? "none" : "0 4px 12px rgba(59, 130, 246, 0.3)")};
  }

  &:active {
    transform: ${(props) => (props.$isLoading ? "none" : "translateY(0)")};
  }
`