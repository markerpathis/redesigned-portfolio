import { Card, CardBody, Image, Heading, Text, HStack, Link } from "@chakra-ui/react";
import ProjectCardButton from "./ProjectCardButton";

interface Props {
  project: Project;
  colorMode: string;
}

interface Project {
  title: string;
  date: string;
  description: string;
  deployedUrl: string;
  githubUrl: string;
  image: string;
}

const ProjectCard = ({ project, colorMode }: Props) => {
  return (
    <>
      <Card width="300px">
        <Image src={project.image} />
        <CardBody>
          <Heading fontSize="xl" paddingBottom={2}>
            {project.title}
          </Heading>
          <Text>{project.description}</Text>
          <HStack paddingTop={4}>
            <Link href={project.githubUrl} target="_blank" rel="noreferrer">
              <ProjectCardButton colorMode={colorMode}>GitHub Repo</ProjectCardButton>
            </Link>
            <Link href={project.deployedUrl} target="_blank" rel="noreferrer">
              <ProjectCardButton colorMode={colorMode}>Deployed App</ProjectCardButton>
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
