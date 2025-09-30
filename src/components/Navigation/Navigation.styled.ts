import { Link } from "react-router";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

export const NavContent = styled.div`
  max-width: 1400px;
  padding: 0 200px;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  @media (max-width: 1024px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  padding: 1rem 0.5rem;
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.$isActive ? "#3b82f6" : "#6b7280")};
  text-decoration: none;
  border-bottom: 2px solid ${props => (props.$isActive ? "#3b82f6" : "transparent")};
  transition: all 0.2s ease;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    color: #3b82f6;
    background: #f9fafb;
  }
`;
