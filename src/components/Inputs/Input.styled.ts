import styled from 'styled-components'

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid ${(props) => (props.$hasError ? "#ef4444" : "#e5e7eb")};
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
  font-family: var(--font-inter),sans-serif;

  &:focus {
    border-color: ${(props) => (props.$hasError ? "#ef4444" : "#3b82f6")};
    box-shadow: 0 0 0 3px
      ${(props) => (props.$hasError ? "rgba(239, 68, 68, 0.1)" : "rgba(59, 130, 246, 0.1)")};
  }

  &::placeholder {
    color: #9ca3af;
  }
`