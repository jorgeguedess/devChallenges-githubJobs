import React from "react";

import { BiTimeFive, BsGlobeAmericas } from "../../styles/Icons";
import { IJob } from "../../hooks/useFetch";
import { convertTime } from "../../utils/times";

import {
  Container,
  CardDetails,
  Title,
  Expertise,
  Benefits,
  CardInfo,
  Info,
} from "./styles";

// components
import ImageComponent from "../ImageComponent";

export interface CardProps {
  id: number;
  title: string;
  expertise: string;
  benefits: string;
  logo: string;
  location: string;
  publish: string;
}

const Card: React.FC<IJob> = ({ ...companie }) => {
  return (
    <Container to={`/vacancy/${companie.pubDate}`}>
      <ImageComponent imageUrl={companie.companyLogo} />
      <CardDetails>
        <Title>{companie.companyName}</Title>
        <Expertise>{companie.title}</Expertise>
        <Benefits>Full time</Benefits>

        <CardInfo>
          <Info>
            <BsGlobeAmericas />{" "}
            {companie.locationRestrictions.length
              ? companie.locationRestrictions[0]
              : "Remote"}
          </Info>
          <Info>
            <BiTimeFive /> {convertTime(companie.pubDate)}
          </Info>
        </CardInfo>
      </CardDetails>
    </Container>
  );
};

export default Card;
