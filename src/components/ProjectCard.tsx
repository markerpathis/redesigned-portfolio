import React from "react";
import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";

import projectImage from "../assets/project-nomdotcom.png";

const ProjectCard = () => {
  return (
    <>
      <Card>
        <Image src={projectImage} />
        <CardBody>
          <Heading fontSize="2xl">Nom Dot Com</Heading>
          <Heading fontSize="1xl" paddingY={3}>
            May 2023
          </Heading>
          <Text>This React app allows users to save, edit, and search for recipes.</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
