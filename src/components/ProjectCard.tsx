import React from "react";
import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";

interface Props {
  project: Project;
}

interface Project {
  title: string;
  date: string;
  description: string;
  deployedUrl: string;
  githubUrl: string;
  image: string;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <>
      <Card width="300px">
        <Image src={project.image} />
        <CardBody>
          <Heading fontSize="2xl">{project.title}</Heading>
          <Text>{project.description}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
