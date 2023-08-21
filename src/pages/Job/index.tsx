import { useParams } from "react-router-dom";

import { BiTimeFive, BsArrowLeft, BsGlobeAmericas } from "../../styles/Icons";

import { useJobs } from "../../context/JobsContext";
import { IJob } from "../../hooks/useFetch";
import { convertTime } from "../../utils/times";

// components
import NotFound from "../NotFound";
import ImageComponent from "../../components/ImageComponent";
import Loading from "../../components/Loading";

import {
  Container,
  LinkBack,
  LinkJob,
  JobMenu,
  JobInfo,
  Header,
  Title,
  Benefits,
  Info,
  CompanyContainer,
  Company,
  Subtitle,
  Location,
  Description,
} from "./styles";

const Job = () => {
  const params = useParams<{ id: string }>();
  const { data, loading, error } = useJobs();

  const jobId = params.id !== undefined && +params.id;
  const job: IJob | null =
    data !== null ? data.find((job: IJob) => job.pubDate === jobId) : null;

  if (!error && loading) return <Loading />;
  if ((error && !loading) || !job) return <NotFound />;
  if (job)
    return (
      <Container>
        <JobMenu>
          <LinkBack to="/">
            <BsArrowLeft />
            Back to search
          </LinkBack>
          <h3>How to Apply</h3>
          <LinkJob href={job.guid} target="_blank">
            Apply here
          </LinkJob>
        </JobMenu>
        <JobInfo>
          <Header>
            <Title>{job.companyName}</Title>
            <Benefits>Full time</Benefits>
            <Info>
              <BiTimeFive />
              {convertTime(job.pubDate)}
            </Info>
          </Header>
          <CompanyContainer>
            <ImageComponent imageUrl={job.companyLogo} width={42} height={42} />
            <Company>
              <Subtitle>{job.title}</Subtitle>
              <Location>
                <BsGlobeAmericas />
                {job.locationRestrictions[0]
                  ? job.locationRestrictions[0]
                  : "Remote"}
              </Location>
            </Company>
          </CompanyContainer>
          <Description
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></Description>
        </JobInfo>
      </Container>
    );
};
export default Job;
