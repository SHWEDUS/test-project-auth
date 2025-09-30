import styled from "styled-components";

export const Table = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 2fr;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 2fr;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  align-items: center;
  transition: background 0.2s ease;

  &:hover {
    background: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;
