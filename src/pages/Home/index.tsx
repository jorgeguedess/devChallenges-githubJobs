import styled from "styled-components";
import { useJobs } from "../../context/JobsContext";

// components
import FormSearch from "../../components/FormSearch";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";

// pages
import NotFound from "../NotFound";

export const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const { data, loading, error } = useJobs();

  if (loading) return <Loading />;
  if (error) return <NotFound />;
  if (data)
    return (
      <Container>
        <FormSearch />
        <Menu />
      </Container>
    );
};

export default Home;
