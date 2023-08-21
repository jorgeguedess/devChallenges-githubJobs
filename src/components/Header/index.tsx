import { useJobs } from "../../context/JobsContext";
import { Container, Logo } from "./styles";

const Header = () => {
  const {
    companie,
    location,
    optionsTime,
    searchCompanie,
    setCompanie,
    setLocation,
    setOptionsTime,
    setSearchCompanie,
  } = useJobs();

  const handleClick = () => {
    if (
      companie !== "" ||
      location !== "" ||
      optionsTime.length > 0 ||
      searchCompanie !== ""
    ) {
      setCompanie("");
      setLocation("");
      setOptionsTime([]);
      setSearchCompanie("");
    }
  };

  return (
    <Container>
      <Logo to="/" onClick={handleClick}>
        <span>Github</span>Jobs
      </Logo>
    </Container>
  );
};

export default Header;
