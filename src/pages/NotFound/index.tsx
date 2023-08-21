import { Container, Title, SubTitle, Description, Button } from "./styles";

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <SubTitle>Sorry, Page Not Found</SubTitle>
      <Description>The page you requested could not be found</Description>
      <Button to="/">Go back home</Button>
    </Container>
  );
};

export default NotFound;
