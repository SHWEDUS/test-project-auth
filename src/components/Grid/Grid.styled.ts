import styled from "styled-components";

interface Props {
  marginBottom?: string;
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "0")};
`;
