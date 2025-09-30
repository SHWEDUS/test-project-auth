import styled from "styled-components";

export const WelcomeSection = styled.div`
  margin-bottom: 2rem;
`;

export const WelcomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const WelcomeSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
`;
