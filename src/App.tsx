import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JobsContextProvider } from "./context/JobsContext";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Job from "./pages/Job";
import NotFound from "./pages/NotFound";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  padding-inline: 1rem;
  @media (min-width: 700px) {
    padding: 1rem 9% 2.4rem 9%;
  }
  margin-inline: auto;
`;

const App = () => {
  return (
    <JobsContextProvider>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vacancy/:id" element={<Job />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </JobsContextProvider>
  );
};

export default App;
