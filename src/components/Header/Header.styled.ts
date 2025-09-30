import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;

  @media (max-width: 1024px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const UserName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a1a;
`;

export const MobileRoleBadge = styled.div`
  @media (min-width: 641px) {
    display: none;
  }
`;
