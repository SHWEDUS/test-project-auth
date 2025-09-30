import { Outlet } from "react-router";
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { FixContainer, LayoutContainer, MainContent } from "./Layout.styled.ts";

export function DashboardLayout() {
  return (
    <LayoutContainer>
      <FixContainer>
        <Header />
        <Navigation />
      </FixContainer>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}
