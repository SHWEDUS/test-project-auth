import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const IconWrapper = styled.div<{ $color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const CardValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;
