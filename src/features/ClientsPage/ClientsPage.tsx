import { Mail, Phone, Building2 } from "lucide-react";
import { IconWrapper } from "../../components/Card/Card.styled.ts";
import { UserDetails, UserInfo } from "../../components/Header/Header.styled.ts";
import { Table, TableHeader, TableRow } from "../../components/Table/Table.styled.ts";
import { PageTitle } from "../../components/Title/Title.styled.ts";
import { ClientEmail, ClientName, ContactInfo, PropertyInfo } from "./ClientPage.styled.ts";

const clients = [
  {
    id: 1,
    name: "Иван Петров",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67",
    property: "Офис в центре",
  },
  {
    id: 2,
    name: "Мария Сидорова",
    email: "maria@example.com",
    phone: "+7 (999) 234-56-78",
    property: "Торговое помещение",
  },
  {
    id: 3,
    name: "Алексей Смирнов",
    email: "alexey@example.com",
    phone: "+7 (999) 345-67-89",
    property: "Склад",
  },
];

export function ClientsPage() {
  return (
    <div>
      <PageTitle>Управление клиентами</PageTitle>

      <Table>
        <TableHeader>
          <div>Клиент</div>
          <div>Контакты</div>
          <div>Телефон</div>
          <div>Объект</div>
        </TableHeader>

        {clients.map(client => {
          const initials = client.name
            .split(" ")
            .map(n => n[0])
            .join("")
            .toUpperCase();

          return (
            <TableRow key={client.id}>
              <UserInfo>
                <IconWrapper $color={"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}>{initials}</IconWrapper>
                <UserDetails>
                  <ClientName>{client.name}</ClientName>
                  <ClientEmail>
                    <Mail size={14} />
                    {client.email}
                  </ClientEmail>
                </UserDetails>
              </UserInfo>

              <ContactInfo>
                <Mail size={16} />
                {client.email}
              </ContactInfo>

              <ContactInfo>
                <Phone size={16} />
                {client.phone}
              </ContactInfo>

              <PropertyInfo>
                <Building2 size={16} />
                {client.property}
              </PropertyInfo>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
}
