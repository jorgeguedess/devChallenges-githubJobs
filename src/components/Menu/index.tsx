import React from "react";

import { Container } from "./styles";

import MenuLocation from "../MenuLocation";
import MenuJobs from "../MenuJobs";

const Menu: React.FC = () => {
  return (
    <Container>
      <MenuLocation />
      <MenuJobs />
    </Container>
  );
};

export default Menu;
