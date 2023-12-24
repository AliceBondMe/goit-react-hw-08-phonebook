import {
  Container,
  IconItem,
  IconShadow,
  MainTitle,
  Slogan,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <div>
        <MainTitle>EasyContacts</MainTitle>
        <Slogan>Safeguarding Your Connections</Slogan>
      </div>

      <IconItem>
        <IconShadow></IconShadow>
      </IconItem>
    </Container>
  );
};

export default HomePage;
