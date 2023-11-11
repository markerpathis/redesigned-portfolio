import React from "react";
import { Card, CardBody, Image, Heading, Text, HStack, Button, Link } from "@chakra-ui/react";

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
          <Heading fontSize="xl" paddingBottom={2}>
            {project.title}
          </Heading>
          <Text>{project.description}</Text>
          <HStack paddingTop={4}>
            <Link href={project.githubUrl} target="_blank" rel="noreferrer">
              <Button
                size="sm"
                color="gray.800"
                fontWeight="medium"
                bgGradient="linear(to-r, #00F5A0, #00D9F5)"
                _hover={{
                  bgGradient: "linear(to-r, #00D9F5, #00F5A0)",
                  fontWeight: "black",
                }}
              >
                GitHub Repo
              </Button>
            </Link>
            <Link href={project.deployedUrl} target="_blank" rel="noreferrer">
              <Button
                size="sm"
                color="gray.800"
                fontWeight="normal"
                bgGradient="linear(to-r, #00F5A0, #00D9F5)"
                _hover={{
                  bgGradient: "linear(to-r, #00D9F5, #00F5A0)",
                  fontWeight: "black",
                }}
              >
                Deployed App
              </Button>
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
