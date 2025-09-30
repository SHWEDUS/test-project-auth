import styled from "styled-components";

export const PropertyHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PropertyIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
`;

export const PropertyInfo = styled.div`
  flex: 1;
`;

export const PropertyAddress = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
`;

export const DetailLabel = styled.span`
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DetailValue = styled.span`
  font-weight: 600;
  color: #1a1a1a;
`;

export const StatusBadge = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => (props.$status === "available" ? "#dcfce7" : "#fee2e2")};
  color: ${props => (props.$status === "available" ? "#166534" : "#991b1b")};
`;
