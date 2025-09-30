import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
`;

export const MainContent = styled.main`
  padding: 144px 200px 20px;

  @media (max-width: 1024px) {
    padding: 144px 100px 100px;
  }

  @media (max-width: 768px) {
    padding: 144px 20px 20px;
  }
`;

export const FixContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
`;
