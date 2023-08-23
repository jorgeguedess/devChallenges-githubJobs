import { useJobs } from "../../context/JobsContext";
import { Container, Logo } from "./styles";

const Header = () => {
  const { handleResetStates } = useJobs();

  return (
    <Container>
      <Logo to="/" onClick={handleResetStates}>
        <span>Github</span>Jobs
      </Logo>
    </Container>
  );
};

export default Header;
