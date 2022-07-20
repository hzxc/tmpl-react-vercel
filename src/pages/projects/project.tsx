import styled from '@emotion/styled';
import { useLocation } from 'react-router';
import { useDocumentTitle } from 'utils';

const useRouteType = () => {
  const units = useLocation().pathname.split('/');
  return units[units.length - 1];
};

export const Project = () => {
  useDocumentTitle('Project');
  const routeType = useRouteType();
  return (
    <Container>
      <Aside>aside:{routeType}</Aside>
      <Main>main:{routeType}</Main>
    </Container>
  );
};

const Aside = styled.aside`
  /* background-color: rgb(244, 245, 247); */
  /* background-color: darkgrey; */
  display: flex;
`;

const Main = styled.div`
  /* background-color: lightsteelblue; */
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  /* overflow: hidden; */
`;

const Container = styled.div`
  /* background-color: green; */
  display: grid;
  grid-template-columns: 16rem 1fr;
  width: 100%;
`;
