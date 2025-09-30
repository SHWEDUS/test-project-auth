import styled from "styled-components";

export const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 220px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  visibility: ${props => (props.$isOpen ? "visible" : "hidden")};
  transform: ${props => (props.$isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.2s ease;
`;

export const DropdownHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const DropdownName = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

export const UserMenu = styled.div`
  position: relative;
`;

export const DropdownEmail = styled.div`
  font-size: 0.8125rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const DropdownMenu = styled.div`
  padding: 0.5rem;
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  color: #374151;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #f3f4f6;
    color: #1f2937;
  }

  &:danger {
    color: #ef4444;

    &:hover {
      background: #fee2e2;
    }
  }
`;
