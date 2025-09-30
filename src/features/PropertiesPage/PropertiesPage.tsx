import { Building2, MapPin, DollarSign, Users } from "lucide-react";
import { Card } from "../../components/Card/Card.styled.ts";
import { Grid } from "../../components/Grid/Grid.styled.ts";
import { PageTitle, PropertyTitle } from "../../components/Title/Title.styled.ts";
import {
  DetailLabel,
  DetailRow,
  DetailValue,
  PropertyAddress,
  PropertyDetails,
  PropertyHeader,
  PropertyIcon,
  PropertyInfo,
  StatusBadge,
} from "./PropertyPage.styled.ts";

const properties = [
  {
    id: 1,
    title: "Офис в центре",
    address: "ул. Тверская, 15",
    price: "150 000 ₽/мес",
    tenants: 3,
    status: "occupied",
  },
  {
    id: 2,
    title: "Торговое помещение",
    address: "пр. Мира, 45",
    price: "200 000 ₽/мес",
    tenants: 0,
    status: "available",
  },
  {
    id: 3,
    title: "Склад",
    address: "ул. Промышленная, 8",
    price: "80 000 ₽/мес",
    tenants: 1,
    status: "occupied",
  },
];

export function PropertiesPage() {
  return (
    <div>
      <PageTitle>Управление объектами</PageTitle>

      <Grid>
        {properties.map(property => (
          <Card key={property.id}>
            <PropertyHeader>
              <PropertyIcon>
                <Building2 size={24} />
              </PropertyIcon>
              <PropertyInfo>
                <PropertyTitle>{property.title}</PropertyTitle>
                <PropertyAddress>
                  <MapPin size={14} />
                  {property.address}
                </PropertyAddress>
              </PropertyInfo>
            </PropertyHeader>

            <PropertyDetails>
              <DetailRow>
                <DetailLabel>
                  <DollarSign size={16} />
                  Стоимость
                </DetailLabel>
                <DetailValue>{property.price}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>
                  <Users size={16} />
                  Арендаторы
                </DetailLabel>
                <DetailValue>{property.tenants}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Статус</DetailLabel>
                <StatusBadge $status={property.status}>
                  {property.status === "available" ? "Доступен" : "Занят"}
                </StatusBadge>
              </DetailRow>
            </PropertyDetails>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
