import styled from "styled-components";

export const Badge = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.$color};
  background: ${props => `${props.$color}15`};
  border: 1px solid ${props => `${props.$color}30`};
  border-radius: 6px;
`;

export const Icon = styled.span`
  font-size: 1rem;
`;
